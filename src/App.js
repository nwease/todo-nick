import React, {useEffect, useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import DB from '../src/firebase';

function App() {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        DB.collection('todos').onSnapshot((snapshot) => {
             setTodos(snapshot.docs.map((doc) => doc.data().title));
        })
    }, []);

    const addATodo = (e) => {
        e.preventDefault();
        // setTodos([inputText, ...todos]);

        DB.collection('todos').add({
            title: inputText
        })

        setInputText('');
    }

    return (
        <div className='app'>
            <h1>
                TODO APP
            </h1>

            <form>
                <input
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    type='text'
                />

                <button
                    disabled={!inputText}
                    type='submit'
                    onClick={addATodo}
                >
                    ADD A TODO
                </button>
            </form>

            {
                todos.map(todo => (
                    <Todo text={todo} />
                ))
            }
        </div>
    );
}

export default App;

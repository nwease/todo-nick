import React from 'react';
import '../css/Todo.css';

function Todo({text}) {
    return (
        <div className='todo'>
            <h2>
                {text}
            </h2>
        </div>
    );
}

export default Todo;
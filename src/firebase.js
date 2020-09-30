import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyCcM9CapB1WzGaWQqNT6s97b2LkSVcBav8",
    authDomain: "todo-nick.firebaseapp.com",
    databaseURL: "https://todo-nick.firebaseio.com",
    projectId: "todo-nick",
    storageBucket: "todo-nick.appspot.com",
    messagingSenderId: "951585077199",
    appId: "1:951585077199:web:24e54deed1b469c03a84ba",
    measurementId: "G-98E79VGX4R"
});

const DB = firebaseApp.firestore();

export default DB;
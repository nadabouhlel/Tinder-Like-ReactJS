import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDG0SgjkbJBRDeHx7KCuc4iV8luYvexiTQ",
    authDomain: "tinder-like-187d2.firebaseapp.com",
    projectId: "tinder-like-187d2",
    storageBucket: "tinder-like-187d2.appspot.com",
    messagingSenderId: "193076789191",
    appId: "1:193076789191:web:56841b7a4ad0640d6423e2",
    measurementId: "G-RR0GB6JZFP"
  };

//with npm i firebase : all the dependecies are installed to use firebase on our app
  const firebaseApp = firebase.initializeApp(firebaseConfig);  //i parsed the firebase config

  const database = firebaseApp.firestore();  //to access our database firestore provided by firebase

  export default database;  //to access our database in everyfile
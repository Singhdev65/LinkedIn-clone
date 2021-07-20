import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAu-9vQaVhqEBzO2A7u4dmvcAy5LJigwU",
    authDomain: "linkedin-clone-a4462.firebaseapp.com",
    projectId: "linkedin-clone-a4462",
    storageBucket: "linkedin-clone-a4462.appspot.com",
    messagingSenderId: "706476242475",
    appId: "1:706476242475:web:17c5c77de7359644d85c6e",
    measurementId: "G-S0Y8QD4Z5J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
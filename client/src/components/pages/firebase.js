import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnvoJr3ptNZMeOxxT34KdXfLObFXKUi4M",
    authDomain: "dev-meet-12fc7.firebaseapp.com",
    projectId: "dev-meet-12fc7",
    storageBucket: "dev-meet-12fc7.appspot.com",
    messagingSenderId: "803799037238",
    appId: "1:803799037238:web:7802e96393fca715386f97",
    measurementId: "G-BN7L34P1RY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;
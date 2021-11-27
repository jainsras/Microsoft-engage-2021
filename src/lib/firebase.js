import firebase from 'firebase'
// import { getAuth, GoogleAuthProvider } from '@firebase/auth';
import 'firebase/firestore'
// import 'firebase/auth';
// import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCSvY5zOyAAzfl6-dD4kSqSBX7tTVxIxO4",
    authDomain: "simpl-e-classroom.firebaseapp.com",
    projectId: "simpl-e-classroom",
    storageBucket: "simpl-e-classroom.appspot.com",
    messagingSenderId: "189173514232",
    appId: "1:189173514232:web:a2ef5caab1a9f4d53c600d",
    measurementId: "G-RGN44MMVXN"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage(); //for images
  export {auth, provider, storage};
  export default db;


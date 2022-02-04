import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKZHjHUz0zkNr_sigUh-v_Za4bNA39k5c",
  authDomain: "newsproject-86cb1.firebaseapp.com",
  projectId: "newsproject-86cb1",
  storageBucket: "newsproject-86cb1.appspot.com",
  messagingSenderId: "253017791573",
  appId: "1:253017791573:web:7b78b1cfb5be66daa0c8dc",
  measurementId: "G-YJFJHDBCXE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const fireInstance = firebaseApp;
export default fireInstance;
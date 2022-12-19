import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAbhgZjBtrSQS0I8afqrNuUhp6MACOv-cc",
  authDomain: "twitter-app-aebeb.firebaseapp.com",
  projectId: "twitter-app-aebeb",
  storageBucket: "twitter-app-aebeb.appspot.com",
  messagingSenderId: "697189619060",
  appId: "1:697189619060:web:2785c93145d204c48a0821"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
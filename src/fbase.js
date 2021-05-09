import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD09_6kUQUAQJlPXX86bPyO_LM6qbeshIU",
    authDomain: "boilerplate-c01a5.firebaseapp.com",
    projectId: "boilerplate-c01a5",
    storageBucket: "boilerplate-c01a5.appspot.com",
    messagingSenderId: "936311645680",
    appId: "1:936311645680:web:8c17d42d6b1d26a1822935",
    measurementId: "G-52PPSWKTHC"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;

  export const authService = firebase.auth();
  export const dbService = firebase.firestore();
  export const storageService = firebase.storage();
import firebase from "firebase/compat/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBJC-8yUiOUht_u2jakiSiBXll72NzysOI",
    authDomain: "novochat-d954c.firebaseapp.com",
    projectId: "novochat-d954c",
    storageBucket: "novochat-d954c.appspot.com",
    messagingSenderId: "891300694220",
    appId: "1:891300694220:web:0b8d28d5fc44e22ccb1a69",
  })
  .auth();

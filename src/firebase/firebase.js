import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBVkRuHGHEUhqfKAQtBGbWuVf4tZJbQgWo",
    authDomain: "expenses-c4e59.firebaseapp.com",
    databaseURL: "https://expenses-c4e59.firebaseio.com",
    projectId: "expenses-c4e59",
    storageBucket: "expenses-c4e59.appspot.com",
    messagingSenderId: "354773917329",
    appId: "1:354773917329:web:0c22ec648330aafb1de930",
    measurementId: "G-LMD9WR7CQB"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const storage = firebase.storage()
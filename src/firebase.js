import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB3Eg3OkdU7EhHSNWCbw6m2_8v-I4l9Rvw",
    authDomain: "movie-temple.firebaseapp.com",
    projectId: "movie-temple",
    storageBucket: "movie-temple.appspot.com",
    messagingSenderId: "202326160820",
    appId: "1:202326160820:web:4025f076b750db357d6ee1",
    measurementId: "G-T6502ZXBJF"

});


export const auth = app.auth();
export const db = app.firestore();


export default app;

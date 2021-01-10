//connecting fireabase to spotify-clone

import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyB5n0DuLeJ2fv1erbT-Euja0d3sa3n01sc",
    authDomain: "spotify-clone-87e28.firebaseapp.com",
    projectId: "spotify-clone-87e28",
    storageBucket: "spotify-clone-87e28.appspot.com",
    messagingSenderId: "94241329038",
    appId: "1:94241329038:web:648e91840f3a27cb481edf",
    measurementId: "G-R9HC1348HJ"
})

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}
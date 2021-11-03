//import {initializeApp} from 'firebase/app';
//import {GoogleAuthProvider, getAuth} from 'firebase/auth';
//import firebase from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCO4xIOJQ-3yXGsaFhcNEU8a74LsHAQ-T4",
    authDomain: "social-media-app-5b1ce.firebaseapp.com",
    projectId: "social-media-app-5b1ce",
    storageBucket: "social-media-app-5b1ce.appspot.com",
    messagingSenderId: "1070769477901",
    appId: "1:1070769477901:web:847ce83598365f482df844"
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
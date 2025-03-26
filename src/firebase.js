import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
    getAuth,
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

// Initialize Firebase
initializeApp(firebaseConfig)

// Initializing Database (Firestore)
const db = getFirestore()
const auth = getAuth()

export {
    db,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
}

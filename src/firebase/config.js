
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider  } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCzx2ASgFUaD5fPKsxX25eY7u9y7ZE4uqM",
    authDomain: "proyecto1-df988.firebaseapp.com",
    projectId: "proyecto1-df988",
    storageBucket: "proyecto1-df988.appspot.com",
    messagingSenderId: "266247293104",
    appId: "1:266247293104:web:fc0fc486caf1bf1b56d375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
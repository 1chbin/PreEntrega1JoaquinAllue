import MOCK_DATA from '../data/MOCK_DATA.json' assert {type: "json"}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCzx2ASgFUaD5fPKsxX25eY7u9y7ZE4uqM",
    authDomain: "proyecto1-df988.firebaseapp.com",
    projectId: "proyecto1-df988",
    storageBucket: "proyecto1-df988.appspot.com",
    messagingSenderId: "266247293104",
    appId: "1:266247293104:web:fc0fc486caf1bf1b56d375"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const productosRef = collection(db, "productos")

MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})
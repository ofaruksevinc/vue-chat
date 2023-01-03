import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAoMiPa8EPHbXP2hIA0OdC4gu9ABGYDeEk",
    authDomain: "chatapp-373613.firebaseapp.com",
    projectId: "chatapp-373613",
    storageBucket: "chatapp-373613.appspot.com",
    messagingSenderId: "552154667959",
    appId: "1:552154667959:web:0d540d64381fb23b052632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db }
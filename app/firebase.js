// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6BijrxW_lTRzoR0bWTvyy9leEiDTU7sc",
  authDomain: "next16-cc-dcc81.firebaseapp.com",
  databaseURL: "https://next16-cc-dcc81-default-rtdb.firebaseio.com",
  projectId: "next16-cc-dcc81",
  storageBucket: "next16-cc-dcc81.firebasestorage.app",
  messagingSenderId: "366769880611",
  appId: "1:366769880611:web:460932fbe45109cad6bb96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjfxuO4XBDlUsTiKXprq64rJH062phSsA",
  authDomain: "luucy-89ac6.firebaseapp.com",
  projectId: "luucy-89ac6",
  storageBucket: "luucy-89ac6.appspot.com",
  messagingSenderId: "344095688000",
  appId: "1:344095688000:web:f908d45c64d52d6cff26a5",
  measurementId: "G-0VBXH5E54G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

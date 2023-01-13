// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC8eeb3inoBjHfVbPAPdknEjKLCERKY74",
  authDomain: "portfolio-731b4.firebaseapp.com",
  projectId: "portfolio-731b4",
  storageBucket: "portfolio-731b4.appspot.com",
  messagingSenderId: "877183261522",
  appId: "1:877183261522:web:53c467742c1f2470fd788b",
  measurementId: "G-PM2GD7W36G"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
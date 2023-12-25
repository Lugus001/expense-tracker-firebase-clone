// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLZjYlMksLPSfURhiafu0360JfcDTYxgY",
  authDomain: "expense-tracker-87f9a.firebaseapp.com",
  projectId: "expense-tracker-87f9a",
  storageBucket: "expense-tracker-87f9a.appspot.com",
  messagingSenderId: "595545491834",
  appId: "1:595545491834:web:02761851687fcb1927eec3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
//firebase login
//firebase init
//firebase deploy

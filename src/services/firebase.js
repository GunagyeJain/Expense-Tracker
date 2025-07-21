// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP2y34kf6xNNzICYOX8foVUcX0MvD3jTA",
  authDomain: "expense-tracker-8c0ef.firebaseapp.com",
  projectId: "expense-tracker-8c0ef",
  storageBucket: "expense-tracker-8c0ef.firebasestorage.app",
  messagingSenderId: "549334192581",
  appId: "1:549334192581:web:296c894b50c10d9f803bac",
  measurementId: "G-NNB5T7BNZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
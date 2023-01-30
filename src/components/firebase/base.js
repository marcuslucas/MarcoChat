import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyA4H07nHlUolJ2iNB4DQuGbWroCy25tWxA",
  projectId: "login-form-1063a",
  authDomain: "login-form-1063a.firebaseapp.com",
  storageBucket: "login-form-1063a.appspot.com",
  messagingSenderId: "973705468346",
  appId: "1:973705468346:web:fa0ae6fb6616293ef72583",
  measurementId: "G-2FCPT9MVML",
});

export const auth = getAuth(app);
export const db = getFirestore(app);

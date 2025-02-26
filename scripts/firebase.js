import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
  query, where, 
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCvllRyzvXhXNNmSgs86OCB2dWlX7UGkU",
  authDomain: "students-quiz-app.firebaseapp.com",
  projectId: "students-quiz-app",
  storageBucket: "students-quiz-app.appspot.com",
  messagingSenderId: "20239389641",
  appId: "1:20239389641:web:ac2200ed8d167d580b0e18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  getFirestore,
  db,
  doc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
  query, where, 
  onAuthStateChanged,
  sendEmailVerification
 
};

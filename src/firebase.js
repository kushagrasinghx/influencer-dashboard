// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBX8jH3EWWYDhrZCYir4JitpouiLBHbnpM",
  authDomain: "dummy-signin-7017d.firebaseapp.com",
  projectId: "dummy-signin-7017d",
  storageBucket: "dummy-signin-7017d.appspot.com",
  messagingSenderId: "1089633339823",
  appId: "1:1089633339823:web:88b919ab7d1f5e5c37475a",
  measurementId: "G-1CJQHCCF6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

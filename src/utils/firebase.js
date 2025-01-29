// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA_6UBqmrnZZBW1YGCCRUAUDQB3qNJxSwo",
  authDomain: "netflixgpt-ceaf2.firebaseapp.com",
  projectId: "netflixgpt-ceaf2",
  storageBucket: "netflixgpt-ceaf2.firebasestorage.app",
  messagingSenderId: "463973537203",
  appId: "1:463973537203:web:fb6613faf4bae7c7c627c6",
  measurementId: "G-N1JF61B2BP"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore


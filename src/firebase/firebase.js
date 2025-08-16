// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUwVOF72g_VHQURFF5I4jmbqd4Gvabyoc",
  authDomain: "stack-junior.firebaseapp.com",
  projectId: "stack-junior",
  storageBucket: "stack-junior.firebasestorage.app",
  messagingSenderId: "608860900452",
  appId: "1:608860900452:web:11ac42d14ac20e9879e371",
  measurementId: "G-M9N89LBWB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
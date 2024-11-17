// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt80AB7DAV68IFXadhlqsZJ8qmzUHaJhw",
  authDomain: "mern-book-exchange.firebaseapp.com",
  projectId: "mern-book-exchange",
  storageBucket: "mern-book-exchange.firebasestorage.app",
  messagingSenderId: "800337623020",
  appId: "1:800337623020:web:e3daa3790df668ab5a72c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
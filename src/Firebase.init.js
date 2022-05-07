// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6U6n7MbsQPSf0Auk6G6J5Ey2-F7DSm8",
  authDomain: "assignment-11-91407.firebaseapp.com",
  projectId: "assignment-11-91407",
  storageBucket: "assignment-11-91407.appspot.com",
  messagingSenderId: "644341998633",
  appId: "1:644341998633:web:a67a78235659f11ee96838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;

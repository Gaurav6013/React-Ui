// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy4UBJQOV0wRHQqVfZcT6jeM0vL117fXk",
  authDomain: "adminpannel-f5979.firebaseapp.com",
  projectId: "adminpannel-f5979",
  storageBucket: "adminpannel-f5979.appspot.com",
  messagingSenderId: "1058608356377",
  appId: "1:1058608356377:web:1e1d8c185a116b1a471e88",
  measurementId: "G-HV7GRZMFJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
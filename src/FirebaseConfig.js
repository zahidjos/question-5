// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClhf7Bo5f2SWm_-YcMmui_J5-_QnKrAZ8",
  authDomain: "job-exam-680cb.firebaseapp.com",
  projectId: "job-exam-680cb",
  storageBucket: "job-exam-680cb.appspot.com",
  messagingSenderId: "357688918360",
  appId: "1:357688918360:web:3628a66c6a8c852fc1252d",
  measurementId: "G-7T7QKVHNRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
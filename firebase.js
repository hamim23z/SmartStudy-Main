// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_GOOGLE_API_KEY,
  authDomain: "smartstudyofficialv1.firebaseapp.com",
  projectId: "smartstudyofficialv1",
  storageBucket: "smartstudyofficialv1.appspot.com",
  messagingSenderId: "986593186545",
  appId: "1:986593186545:web:fe13a2d645d21a09564f50",
  measurementId: "G-4K4424YSWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
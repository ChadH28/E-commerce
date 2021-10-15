// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; //for user sign in
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0bwmC14XNKuPUX18RmBFVO8libTvUxlw",
  authDomain: "clothing-e-commerce-85cba.firebaseapp.com",
  projectId: "clothing-e-commerce-85cba",
  storageBucket: "clothing-e-commerce-85cba.appspot.com",
  messagingSenderId: "406254623092",
  appId: "1:406254623092:web:df75b251d8aa3b06d13421",
  measurementId: "G-EXBCRVE0P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);


export {
  functions,
  storage,
  db,
  auth,
  analytics
}
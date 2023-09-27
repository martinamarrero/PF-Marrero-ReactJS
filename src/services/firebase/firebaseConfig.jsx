// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPm11f5zw0Mlu5t3gLPqibol8Zko3Voro",
  authDomain: "pf-reactjs-marrero.firebaseapp.com",
  projectId: "pf-reactjs-marrero",
  storageBucket: "pf-reactjs-marrero.appspot.com",
  messagingSenderId: "7572284608",
  appId: "1:7572284608:web:2ba150952db3425d21b925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5KDJ0Iirt6iT2_s71AEYpx2nF8i38D9g",
  authDomain: "ecommerce-926d9.firebaseapp.com",
  projectId: "ecommerce-926d9",
  storageBucket: "ecommerce-926d9.firebasestorage.app",
  messagingSenderId: "1015853589195",
  appId: "1:1015853589195:web:f51467f2c8e3541647f14e",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {app,auth,db};
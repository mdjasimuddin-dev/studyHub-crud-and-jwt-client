// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLzMbr6pQuLHFXj29Km-bu8Tcb3oB1MT8",
  authDomain: "crud-and-jwt-project.firebaseapp.com",
  projectId: "crud-and-jwt-project",
  storageBucket: "crud-and-jwt-project.appspot.com",
  messagingSenderId: "218103418658",
  appId: "1:218103418658:web:041f485a8fbe609c9a1f7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

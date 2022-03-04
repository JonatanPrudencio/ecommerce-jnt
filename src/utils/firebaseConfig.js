// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1g9Tyago89vczDhiH4AuZHlO8hS5YJtU",
  authDomain: "ecomm-jnt.firebaseapp.com",
  projectId: "ecomm-jnt",
  storageBucket: "ecomm-jnt.appspot.com",
  messagingSenderId: "993104075721",
  appId: "1:993104075721:web:f87f413fa5f46d499ee618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
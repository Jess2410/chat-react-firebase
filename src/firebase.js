// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt1do9GqTlo-Zr0OUC7f-6GzXXtFafmbw",
  authDomain: "chat-b0dfb.firebaseapp.com",
  projectId: "chat-b0dfb",
  storageBucket: "chat-b0dfb.appspot.com",
  messagingSenderId: "1020600061093",
  appId: "1:1020600061093:web:80c9063e6b7042754b514c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "e-commerce-8b8a2.firebaseapp.com",
  projectId: "e-commerce-8b8a2",
  storageBucket: "e-commerce-8b8a2.appspot.com",
  messagingSenderId: "507257484862",
  appId: "1:507257484862:web:c29f1301f80875f869c36f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

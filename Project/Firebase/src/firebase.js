import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBivRdCspJCgoY-Wv9fseOc9ga3qt1O_FU",
  authDomain: "fir-login-2083f.firebaseapp.com",
  projectId: "fir-login-2083f",
  storageBucket: "fir-login-2083f.firebasestorage.app",
  messagingSenderId: "472090661061",
  appId: "1:472090661061:web:abaeeb3755bffe4f9ee0ac",
  measurementId: "G-JVVQCD13CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
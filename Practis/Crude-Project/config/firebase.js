// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmCwlQXNz3Ut3z1f4oIbzVUf48PGgDoDA",
  authDomain: "crude-project1.firebaseapp.com",
  projectId: "crude-project1",
  storageBucket: "crude-project1.firebasestorage.app",
  messagingSenderId: "530887498121",
  appId: "1:530887498121:web:7e6274707721a4c6052958",
  measurementId: "G-YY63KHJK5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider 
const analytics = getAnalytics(app);

export{auth , provider}
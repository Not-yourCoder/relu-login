import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCb5ySNeGyIRmCSGla14YHn1cwe_-PWArY",
  authDomain: "r-login-4376f.firebaseapp.com",
  projectId: "r-login-4376f",
  storageBucket: "r-login-4376f.appspot.com",
  messagingSenderId: "112565724069",
  appId: "1:112565724069:web:33d37e246e2c5f77913e4c",
  measurementId: "G-FW02LW7NDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

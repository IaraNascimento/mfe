import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgWqoUaiDE1ueUrzJKSKrZBqvevfiFpVk",
  authDomain: "a5x-mfe.firebaseapp.com",
  projectId: "a5x-mfe",
  storageBucket: "a5x-mfe.firebasestorage.app",
  messagingSenderId: "1021894391889",
  appId: "1:1021894391889:web:8140c11bde7064c2d86070",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

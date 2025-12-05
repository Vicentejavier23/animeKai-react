
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsXc2z8WLlnUeDFe3_HBazNUDaiEznirY",
  authDomain: "animekai-auth.firebaseapp.com",
  projectId: "animekai-auth",
  storageBucket: "animekai-auth.firebasestorage.app",
  messagingSenderId: "736057589078",
  appId: "1:736057589078:web:d8977113f3ddb9b17caaf7"
};


export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
    
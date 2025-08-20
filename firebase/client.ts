import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";   // ✅ Correct import
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0umHa4_ojGNDwrNzqT9tQZ0Yk9n5CfFQ",
  authDomain: "interview-mentor2.firebaseapp.com",
  projectId: "interview-mentor2",
  storageBucket: "interview-mentor2.firebasestorage.app",
  messagingSenderId: "181138557002",
  appId: "1:181138557002:web:ad0f39d854c3d0c8057eb3",
  measurementId: "G-65LWFP0ND0",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

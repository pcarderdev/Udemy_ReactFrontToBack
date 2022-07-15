import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5PQ6RQMVlYwRfDQUbg4UzkFFfiq_jc30",
  authDomain: "house-marketplace-app-c885c.firebaseapp.com",
  projectId: "house-marketplace-app-c885c",
  storageBucket: "house-marketplace-app-c885c.appspot.com",
  messagingSenderId: "594902754351",
  appId: "1:594902754351:web:e50071e14468d0bd4052da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
// firebase.js
import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_YOUR_API_KEY,
  authDomain: import.meta.env.VITE_YOUR_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_YOUR_PROJECT_ID,
  storageBucket: import.meta.env.VITE_YOUR_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_YOUR_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_YOUR_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAI9CFz0hmCMzik5yp-pjCMNbE9rMZQXtU",
//   authDomain: "jivi-web.firebaseapp.com",
//   projectId: "jivi-web",
//   storageBucket: "jivi-web.appspot.com",
//   messagingSenderId: "348365508836",
//   appId: "1:348365508836:web:19e163fd57babdd64f1cf1",
// };
// export { firestore }
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

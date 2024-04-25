// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// const firebaseConfig = {
//   apiKey: "AIzaSyBV_-x9DJRMZCqghJFueGS4AQERlEjQosU",
//   authDomain: "globify-tourism-management.firebaseapp.com",
//   projectId: "globify-tourism-management",
//   storageBucket: "globify-tourism-management.appspot.com",
//   messagingSenderId: "221566652779",
//   appId: "1:221566652779:web:d1eec42e424ac74c8c3c2e"
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
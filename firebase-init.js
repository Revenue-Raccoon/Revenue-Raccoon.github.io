// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7dmlAC2XpVRuyyrdYDOesTlfPWHFh3aw",
  authDomain: "racoon-revenue.firebaseapp.com",
  projectId: "racoon-revenue",
  storageBucket: "racoon-revenue.appspot.com",
  messagingSenderId: "937762716736",
  appId: "1:937762716736:web:e88134c271e114450f33a5",
  measurementId: "G-H47V90KK0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// token - 1//0dUZv9PJz_pq8CgYIARAAGA0SNwF-L9IrMWlEJN_aP8jqP_pZVclo0QyDOtAEVIVhRn50pKXt5cG1P6P6Kq9TarfDq-MRnovi6xc
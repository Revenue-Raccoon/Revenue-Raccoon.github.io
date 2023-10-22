// firebaseConfig.js
import { initializeApp, getApps, app } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC7dmlAC2XpVRuyyrdYDOesTlfPWHFh3aw",
    authDomain: "racoon-revenue.firebaseapp.com",
    projectId: "racoon-revenue",
    storageBucket: "racoon-revenue.appspot.com",
    messagingSenderId: "937762716736",
    appId: "1:937762716736:web:e88134c271e114450f33a5",
    measurementId: "G-H47V90KK0M"
  };

// Initialize Firebase if it hasn't been initialized
if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    const auth = app.auth();}

export { app, auth };

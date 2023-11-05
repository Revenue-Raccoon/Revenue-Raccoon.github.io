// firebaseConfig.js
import { initializeApp, getApps} from 'firebase/app';
import { getAuth } from 'firebase/auth';



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
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth };
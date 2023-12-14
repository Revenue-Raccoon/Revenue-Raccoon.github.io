// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'; // Import the core Firebase module
import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7dmlAC2XpVRuyyrdYDOesTlfPWHFh3aw",
  authDomain: "racoon-revenue.firebaseapp.com",
  databaseURL: "https://racoon-revenue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "racoon-revenue",
  storageBucket: "racoon-revenue.appspot.com",
  messagingSenderId: "937762716736",
  appId: "1:937762716736:web:e88134c271e114450f33a5",
  measurementId: "G-H47V90KK0M"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for state persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


export { auth, app };

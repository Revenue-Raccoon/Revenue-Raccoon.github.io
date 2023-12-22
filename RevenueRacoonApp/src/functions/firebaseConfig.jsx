import { getApps, initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7dmlAC2XpVRuyyrdYDOesTlfPWHFh3aw",
  authDomain: "racoon-revenue.firebaseapp.com",
  projectId: "racoon-revenue",
  storageBucket: "racoon-revenue.appspot.com",
  messagingSenderId: "937762716736",
  appId: "1:937762716736:web:e88134c271e114450f33a5",
  measurementId: "G-H47V90KK0M"
};

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Initialize Auth only if it hasn't been initialized yet
const app = getApps()[0]; // Assuming the app is the first initialized app
let auth;
if (!getAuth(app)) {
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
} else {
  auth = getAuth(app);
}
export { app, auth };

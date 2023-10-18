import React, { useEffect } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  EmailAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import 'firebaseui'; // Import FirebaseUI without specifying an export name
import 'firebaseui/dist/firebaseui.css'; // Import FirebaseUI CSS
// import { useUser } from '/src/components/UserContext.jsx'; // Import the UserContext
import socket from '/src/functions/socketConfig.js';

const FirebaseAuth = () => {
  // const { setUser } = useUser(); // Get the setUser function from the context

  useEffect(() => {
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
      initializeApp(firebaseConfig);
    }

    // Temp variable to hold the anonymous user data if needed.
    var data = null;

    // Initialize Firebase Authentication
    const authInstance = getAuth();

    // Hold a reference to the anonymous current user.
    const anonymousUser = authInstance.currentUser;

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(authInstance);

    var uiConfig = {
      autoUpgradeAnonymousUsers: true,
      
      // redirecting to beginning
      signInSuccessUrl: '/',
    
      callbacks: {
        // Check if it's a new user signup
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          if (authResult.additionalUserInfo.isNewUser) {
            socket.emit('userSignUp', authResult.user.uid);
          }
          if (data === "User creation failed") {
            console.log('process failed');
          }
          setUser(authResult.user); // Update user data in context
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          // const loader = document.getElementById('Loader');
          // if (loader) {
          //   loader.style display = 'none';
          // }
        },
        // signInFailure callback must be provided to handle merge conflicts which
        // occur when an existing credential is linked to an anonymous user.
        signInFailure: function(error) {
          // For merge conflicts, the error code will be
          // 'firebaseui/anonymous-upgrade-merge-conflict'.
          if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
            return Promise.resolve();
          }
          // The credential the user tried to sign in with.
          var cred = error.credential;
          // Copy data from anonymous user to permanent user and delete anonymous
          // user.
          // ...
          // Finish sign-in after data is copied.
          return signInWithCredential(cred);
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>',
      // Privacy policy url.
      privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    // Start FirebaseUI widget with the provided container and configuration
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  const FirebaseAuthContainer = () => {
    return (
      <div>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
        {/* <Loader /> */}
      </div>
    );
  };

  return <FirebaseAuthContainer />;
};

export default FirebaseAuth;

// FirebaseAuth.js
import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  EmailAuthProvider,
} from 'firebase/auth';
import 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

import socket from '/src/functions/socketConfig.js';
import { app } from '/src/functions/firebaseConfig.jsx'; // Import the Firebase app

const FirebaseAuth = () => {
  useEffect(() => {
    const authInstance = getAuth(app); // Use the app from firebaseConfig.js

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(authInstance);

    var uiConfig = {
      autoUpgradeAnonymousUsers: true,
      signInSuccessUrl: '/',
      callbacks: {
        signInSuccessWithAuthResult: async function (authResult, redirectUrl) {
          if (authResult.additionalUserInfo.isNewUser) {
            socket.emit('userSignUp', authResult.user.uid);
          }
          console.log("user", authResult.user);
          if (authResult.user) {
            // Ensure authResult.user is not null
            console.log('User signed in:', authResult.user);
          } else {
            console.log('User not signed in');
          }
          return true;
        },
        signInFailure: function (error) {
          // Handle sign-in failure or conflicts here.
          if (error.code === 'firebaseui/anonymous-upgrade-merge-conflict') {
            // Handle merge conflict (e.g., link the credential to the anonymous user).
            // ...
          } else {
            // Handle other sign-in failures.
            // ...
          }
        },
      },
      signInFlow: 'popup',
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID
      ],
      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  const FirebaseAuthContainer = () => {
    return (
      <div>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
      </div>
    );
  };

  return <FirebaseAuthContainer />;
};

export default FirebaseAuth;

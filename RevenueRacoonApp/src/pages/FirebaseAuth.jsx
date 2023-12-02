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

import socket from '../functions/socketConfig.js';
import { app } from '../functions/firebaseConfig.jsx'; // Import the Firebase app

const FirebaseAuth = () => {
  useEffect(() => {
    const authInstance = getAuth(app); // Use the app from firebaseConfig.js

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(authInstance);

    var uiConfig = {
      autoUpgradeAnonymousUsers: true,
      signInSuccessUrl: '/',
      callbacks: {
        signInSuccessWithAuthResult: async function (authResult) {
          alert('User is new: ' + authResult.additionalUserInfo.isNewUser);
          if (authResult.additionalUserInfo.isNewUser) {
            alert("sending user - frontend");
            socket.emit('userSignUp', authResult.user.uid);

            // Listen for the userConnectedStatus event
            socket.on('userConnectedStatus', (response) => {
              if (response.message === 'User created successfully') {
                console.log(response.message);
                // Continue with your code here
              } else {
                console.error(response.message);
                // Handle the error or restart the process as needed
              }
            });
          }
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

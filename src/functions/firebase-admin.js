import admin from 'firebase-admin';

admin.initializeApp();

// Set ID token to expire after 1 hour
const oneHour = 60 * 60;
admin.auth().setCustomUserClaims(uid, {expiresIn: oneHour});
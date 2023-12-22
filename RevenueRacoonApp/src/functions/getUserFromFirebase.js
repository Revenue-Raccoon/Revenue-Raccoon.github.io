import auth from '../functions/firebaseConfig'

export function getUserObject() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // The user is authenticated, and 'authUser' contains the user object
        unsubscribe(); // Unsubscribe to stop listening to further changes
        resolve(authUser);
      } else {
        // The user is not authenticated
        unsubscribe(); // Unsubscribe to stop listening to further changes
        resolve(null);
      }
    });
  });
}

export default getUserObject

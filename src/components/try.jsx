import { useEffect } from 'react';
import { getUserObject } from '/src/functions/getUserFromFirebase.js'; // Replace with the actual path to your utility file

function UserStatus() {
  useEffect(() => {
    getUserObject()
      .then((user) => {
        if (user) {
          // The user object is available
          console.log('User UID:', user.uid);
          console.log('User Email:', user.email);
          console.log('User Display Name:', user.displayName);
          // You can access other user properties as needed
        } else {
          // The user is not authenticated
          console.log('User is not logged in');
        }
      })
      .catch((error) => {
        console.error('Error getting user object:', error);
      });
  }, []);

  return <div>Your component content</div>;
}

export default UserStatus;
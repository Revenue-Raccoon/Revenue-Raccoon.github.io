import React, { useEffect, useState } from 'react';
import { getUserObject } from '/src/functions/getUserFromFirebase.js'; // Replace with the actual path to your utility file
import { useHistory } from 'react-router-dom'; // Import the useHistory hook

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Check if the user is signed in
    getUserObject()
      .then((userData) => {
        if (userData) {
          // User is signed in, set the user in the state
          setUser(userData);
        } else {
          // User is not signed in, redirect to the login page
          history.push('/login');
        }
      })
      .catch((error) => {
        console.error('Error getting user object:', error);
      });
  }, [history]);

  return (
    <div>
      <main>
        {user ? (
          // User is signed in, display the child components
          children
        ) : null}
      </main>
    </div>
  );
};

export default Layout;

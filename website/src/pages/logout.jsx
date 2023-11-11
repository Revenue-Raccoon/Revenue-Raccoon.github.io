import React, { useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const auth = getAuth();
  const history = useHistory();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        // Redirect to the login or home page after logout
        history.push('/login'); // Replace with the path you want to redirect to
      } catch (error) {
        console.error('Error logging out:', error);
        // Handle any error or show a message to the user
      }
    };

    handleLogout();
  }, [auth, history]);

  return <div>Logging out...</div>;
};

export default Logout;

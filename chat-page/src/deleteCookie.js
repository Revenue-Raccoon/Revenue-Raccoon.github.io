import React, { useState } from 'react';
import { removeCookie } from './cookieManager'; // Import cookie functions
import io from 'socket.io-client';
import socket from './socketConfig';

const Logout = () => {
    const [logoutError, setLogoutError] = useState('');
    const [logoutSuccess, setLogoutSuccess] = useState(false);

    const handleLogout = () => {
        const userCookie = getUserCookie(); // Get user's cookie
        const user_id = getUserIdFromCookie(userCookie); // Implement this function to get user_id from the cookie
    
        if (userCookie && user_id) {
          // Emit signout event to the server
          socket.emit('signout', { cookie: userCookie, user_id: user_id });
        } else {
          setLogoutError('Invalid user cookie');
        }
    

    useEffect(() => {
        // Listen for sign out success event
        socket.on('sign_out_success', () => {
          setLogoutSuccess(true);
          removeCookie(); // Remove user cookie from localStorage
        });
    
        // Listen for sign out error event
        socket.on('sign_out_error', () => {
          setLogoutError('Logout failed');
        });
    
        // Clean up listeners when component unmounts
        return () => {
          socket.off('sign_out_success');
          socket.off('sign_out_error');
        };
      }, []);

  };

  return (
    <div>
      {logoutError && <p>{logoutError}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

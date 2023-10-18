import React from 'react';
import Navbar from './Navbar';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {user ? (
          children // No need for extra curly braces
        ) : (
          // User is not logged in, show the Firebase authentication component
          window.location.href = '/login'
          )}
      </main>
    </div>
  );
};

export default Layout;

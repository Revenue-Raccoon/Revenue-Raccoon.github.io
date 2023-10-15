import React from 'react';
import Navbar from './Navbar';
import { useUser } from '/src/components/UserContext.jsx';
import FirebaseAuth from '/src/pages/FirebaseAuth.jsx';

const Layout = ({ children }) => {
  const { user } = useUser();
  return (
    <div>
      <Navbar />
      <main>
        {user ? (
          {children}
        ) : (
          // User is not logged in, show the Firebase authentication component
          <FirebaseAuth />
        )}
      </main>
    </div>
  );
};

export default Layout;

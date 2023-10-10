import React from 'react';
import Navbar from './Navbar';
import { useUser } from '/src/components/UserContext.jsx';
import  FirebaseAuth from '/src/pages/FirebaseAuth.jsx';

const Layout = ({ children }) => {
  const { user } = useUser();

  if (user) {
    // User is logged in, you can access user properties
    const { displayName, email, uid } = user;
    
    return (
      <div>
        <Navbar />
        <main>
          {children}
        </main>
      </div>
    );
  } else {
    // User is not logged in
    return (
      <div>
        <Navbar />
        <main>
          <FirebaseAuthContainer />
        </main>
      </div>
    );
  }
};

export default Layout;

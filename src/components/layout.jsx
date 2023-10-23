import React from 'react';
import Navbar from './Navbar';
import { useUser } from '/src/components/UserContext.jsx';
import { useHistory } from 'react-router-dom';

const Layout = ({ children }) => {
  const { user } = useUser();
  const history = useHistory()

  return (
    <div>
      <Navbar />
      <main>
        {user ? (
          children
        ) : (
          // User is not logged in, show the Firebase authentication component
          history.push('/login')
        )}
      </main>
    </div>
  );
};

export default Layout;

import React from 'react';
import Navbar from './Navbar';
import { useUser } from '/src/components/UserContext.jsx';


const Layout = ({ children }) => {
  const { user } = useUser(); // Use the useUser hook to access the user value
  console.log("User: ", user);
  return (
    <div>
      <Navbar />
      <main>
        {user ? (
          children
        ) : (
          // User is not logged in, show the Firebase authentication component
          window.location.href = '/login'
        )}
      </main>
    </div>
  );
};

export default Layout;

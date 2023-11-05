// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '/src/functions/firebaseConfig.jsx'; // Make sure you import your Firebase setup
import { useHistory } from 'react-router-dom';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}


export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    // Firebase auth state change listener

    const checkUserSession = async () => {
      const authUser = await auth.currentUser;
      console.log("user", authUser);
      if (authUser) {
        setUser({
          uid: authUser.uid,
          email: authUser.email,
          // Add more properties as needed
        });
      } else {
        setUser(null);
      }
    };

    checkUserSession();
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("user", authUser);
      if (authUser) {
        // If the user is logged in, set the user object
        setUser({
          uid: authUser.uid,
          email: authUser.email,
          // Add more properties as needed
        });
      } else {
        // If the user logs out, set user to null
        setUser(null);
      }

    });

    return () => {
      // Cleanup the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}



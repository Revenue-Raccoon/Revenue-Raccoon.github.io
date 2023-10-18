import React, { createContext, useContext, useState } from 'react';

// Create a context for user data
const UserContext = createContext();

// Custom hook to access the user context
export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user state is null

  // Function to update the user
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  // Create a context value with user and updateUser function
  const contextValue = {
    user,
    updateUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

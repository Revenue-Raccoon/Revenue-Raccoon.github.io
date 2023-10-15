import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const sendUserToServer = (userId) => {
    // Send the user ID to the server via Socket.IO
    socket.emit('userConnected', userId);
  };

  useEffect(() => {
    // Set up event listeners for success and failure
    socket.on('userConnectedStatus', data);

    // Clean up the event listeners when the component unmounts
    return () => {
      socket.off('userConnectedSuccess');
      socket.off('userConnectedFailure');
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, userCreatedSuccessfully, userCreationFailed }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

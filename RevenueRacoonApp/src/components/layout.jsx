import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import Navbar from "../components/Navbar"; // Adjust the path as needed
import globals from '../globals'; // Import the global variable

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Check if the user is signed in
    getUserObject()
      .then((userData) => {
        if (userData) {
          // User is signed in, set the user in the state
          setUser(userData);
        } else {
          // User is not signed in, redirect to the login page
          navigation.navigate('Login'); // Replace 'Login' with the name of your login screen
        }
      })
      .catch((error) => {
        console.error('Error getting user object:', error);
      });
  }, [navigation]);

  return (
    <SafeAreaView>
      {/* Assuming Navbar is a React Native compatible component */}
      <Navbar />
      <View style={{ flex: 1 }}> {/* Using View to wrap children */}
        {globals.userId ? children : null}
      </View>
    </SafeAreaView>
  );
};

export default Layout;

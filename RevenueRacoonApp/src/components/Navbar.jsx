// Navbar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Chat')}>
        <Text style={styles.link}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('FirebaseAuth')}>
        <Text style={styles.link}>FirebaseAuth</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('TryComponent')}>
        <Text style={styles.link}>TryComponent</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('ChatRoom')}>
        <Text style={styles.link}>ChatRoom</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Begin')}>
        <Text style={styles.link}>Begin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('StorePage')}>
        <Text style={styles.link}>StorePage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Logout')}>
        <Text style={styles.link}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('ProfilePage')}>
        <Text style={styles.link}>ProfilePage</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#3498db', // You can customize the background color
  },
  link: {
    color: 'white',
    fontSize: 18,
  },
});

export default Navbar;

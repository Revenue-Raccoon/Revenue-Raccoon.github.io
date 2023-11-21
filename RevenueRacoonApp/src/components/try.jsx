// try.jsx

import React from 'react';
import { View, Text } from 'react-native';
import { getUserObject } from '../functions/getUserFromFirebase.js';

const TryComponent = () => {

  const getUser = async () => {
    const user = await getUserObject();
    
    if (user) {
      console.log('User:', user);
    } else {
      console.log('No user'); 
    }
  }

  getUser();

  return (
    <View>
      <Text>Try Component</Text> 
    </View>
  );
}

export default TryComponent;
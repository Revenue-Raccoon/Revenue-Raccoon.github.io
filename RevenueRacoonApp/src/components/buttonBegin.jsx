// buttonBegin.jsx

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from '../styles/buttonStyles';

const ButtonComponent = () => {

  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>START</Text>
      </TouchableOpacity> 
    </View>
  );
}

export default ButtonComponent;
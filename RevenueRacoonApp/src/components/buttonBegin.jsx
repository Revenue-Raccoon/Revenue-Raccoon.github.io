// buttonBegin.jsx

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/buttonStyles';

const ButtonComponent = () => {

  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>START</Text>
        <Icon name="arrow-right" size={15} color="#fff" />
      </TouchableOpacity> 
    </View>
  );
}

export default ButtonComponent;
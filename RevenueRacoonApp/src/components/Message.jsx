import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/MessageStyles';

const Message = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

export default Message;
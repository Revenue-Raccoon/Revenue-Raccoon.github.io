// LinkItem.js

import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './LinkItemStyles';

const LinkItem = ({link}) => (
  <View style={styles.container}>
    <Image 
      source={{uri: link.image}}
      style={styles.image}
    />
    <View style={styles.details}>
      <Text style={styles.title}>{link.title}</Text>
      <Text style={styles.price}>${link.price}</Text>
    </View>
  </View>
);

export default LinkItem;
// begin.jsx

import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/beginStyles';

import Layout from '../components/layout';
import Button from '../components/buttonBegin';

const BeginScreen = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); 
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        <Image 
          source={require('../assets/pic/what.png')}
          style={styles.backgroundImage} 
        />

        <Image
          source={require('../assets/pic/what.png')}  
          style={styles.raccoonImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.header}>REVENUE</Text>
          <Text style={styles.subHeader}>RACCOON</Text> 
        </View>

        <Button title="Get Started" />
      </View>
    </Layout>
  );
}

export default BeginScreen;
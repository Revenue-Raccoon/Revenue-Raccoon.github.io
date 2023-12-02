// App.js

import React from 'react';
import { StatusBar } from 'expo-status-bar';  
import { StyleSheet, View, Text } from 'react-native'; // Import Text from 'react-native'

import Routes from '../src/functions/Routes';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.testText}>Hello, this is a test!</Text>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  testText: { // Style for the test text
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  }
});
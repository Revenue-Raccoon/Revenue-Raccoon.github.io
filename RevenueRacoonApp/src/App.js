import React from 'react';
import { StatusBar } from 'expo-status-bar';  
import { StyleSheet, View, Text } from 'react-native';
import Routes from './functions/Routes';
export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  testText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  }
});
  
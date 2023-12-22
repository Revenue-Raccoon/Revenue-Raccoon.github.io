import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // ודא שהאייקון זמין

const FacebookSignInButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonContentWrapper}>
        <FontAwesome name="facebook" size={20} color="blue" style={styles.icon} />
        <Text style={styles.buttonContents}>login with Facebook</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderColor: '#747775',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
    marginHorizontal: 20,
    marginVertical: 8, 
  },
  buttonContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // ממרכז את האלמנטים
    width: '100%',
  },
  icon: {
    marginRight: 12,
  },
  buttonContents: {
  fontFamily: 'Roboto',
  fontSize: 14,
  fontWeight: '500',
  color: '#1f1f1f',
  },
});

export default FacebookSignInButton;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert("Success", "Password reset email sent!");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.gradientTop} />
      <View style={styles.gradientBottom} />
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            placeholderTextColor="white"
          />
        </View>
        <TouchableOpacity style={styles.sendCodeButton} onPress={handlePasswordReset}>
          <Text style={styles.sendCodeText}>Send Code</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.rememberPasswordText}>
        <Text style={styles.whiteText}>Remember Password? </Text>
        <Text style={styles.yellowText}>Login</Text>
      </Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/27x27' }}
        style={styles.rightArrow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'white',
    height: 44, // Adjust as needed
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientTop: {
    width: '100%',
    height: 144,
    position: 'absolute',
    backgroundColor: '#6600B7',
  },
  gradientBottom: {
    width: '100%',
    height: 144,
    position: 'absolute',
    bottom: 0,
    transform: [{ rotate: '180deg' }],
    backgroundColor: '#6600B7',
  },
  forgotPasswordText: {
    color: '#FFBF00',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 39,
    textAlign: 'center',
    marginTop: 99,
  },
  inputContainer: {
    marginTop: 194,
    alignItems: 'center',
  },
  inputBox: {
    width: 316.8,
    height: 44.14,
    backgroundColor: '#8F00FF',
    borderRadius: 8,
    marginBottom: 15,
  },
  inputLabel: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Urbanist',
    fontWeight: '500',
    lineHeight: 18.75,
    textAlign: 'center',
  },
  sendCodeButton: {
    width: 83,
    height: 44.14,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  sendCodeText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 18.75,
  },
  rememberPasswordText: {
    textAlign: 'center',
    marginTop: 21,
    color: 'white',
  },
  whiteText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 21,
  },
  yellowText: {
    color: '#FFBF00',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 21,
  },
  rightArrow: {
    width: 27,
    height: 27, 
    transform: [{ rotate: '180deg' }],
  },
});

export default ForgotPasswordScreen;

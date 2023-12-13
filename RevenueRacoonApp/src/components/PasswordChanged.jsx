import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PasswordChangedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop} />
      <View style={styles.gradientBottom} />
      <View style={styles.successMark}>
        <View style={styles.sticker}>
          <View style={styles.vectorBackground}>
            <View style={styles.vector} />
          </View>
          <View style={styles.vectorWhite} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.passwordChangedText}>Password Changed!</Text>
        <Text style={styles.successText}>
          Your password has been changed successfully.
        </Text>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <View style={styles.loginButtonBackground}>
          <Text style={styles.loginButtonText}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientTop: {
    width: '100%',
    height: 180,
    position: 'absolute',
    backgroundColor: 'rgba(143, 0, 255, 0.80)',
    transform: [{ rotate: '179.91deg' }],
  },
  gradientBottom: {
    width: '100%',
    height: 180,
    position: 'absolute',
    bottom: 0,
    backgroundColor:
      'linear-gradient(180deg, rgba(143, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0) 100%)',
  },
  successMark: {
    width: 100,
    height: 100,
    left: 131,
    top: 161,
    position: 'absolute',
  },
  sticker: {
    width: 100,
    height: 100,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  vectorBackground: {
    width: 100,
    height: 100,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#18C07A',
  },
  vector: {
    width: 46.98,
    height: 36.45,
    left: 26.31,
    top: 33.46,
    position: 'absolute',
    backgroundColor: 'white',
  },
  vectorWhite: {
    width: 46.98,
    height: 36.45,
    left: 26.31,
    top: 33.46,
    position: 'absolute',
    backgroundColor: 'white',
  },
  textContainer: {
    left: 47,
    top: 291,
    position: 'absolute',
  },
  passwordChangedText: {
    width: 312,
    textAlign: 'center',
    color: '#FFBF00',
    fontSize: 26,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  successText: {
    width: 226,
    left: 21,
    top: 39,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 22.5,
  },
  loginButton: {
    width: 316.8,
    height: 44.14,
    left: 22,
    top: 423,
    position: 'absolute',
  },
  loginButtonBackground: {
    width: 316.8,
    height: 44.14,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#8F00FF',
    borderRadius: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 18.75,
    top: 11.23,
  },
});

export default PasswordChangedScreen;


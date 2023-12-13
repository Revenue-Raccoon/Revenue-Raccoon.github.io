import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ResetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop} />
      <View style={styles.gradientBottom} />
      <Text style={styles.createNewPasswordText}>Create New Password</Text>
      <Text style={styles.uniquePasswordText}>
        Your new password must be unique from those previously used.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>New Password</Text>
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
      <Image
        source={{ uri: 'https://via.placeholder.com/27x27' }}
        style={styles.rightArrow}
      />
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
    backgroundColor: 'linear-gradient(180deg, rgba(143, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0) 100%)',
  },
  createNewPasswordText: {
    width: 312,
    textAlign: 'center',
    color: '#FFBF00',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 39,
    marginTop: 96,
  },
  uniquePasswordText: {
    width: 311,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 192,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 100,
  },
  inputBox: {
    width: 316.8,
    height: 44.14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
  input: {
    flexDirection: 'row',
  },
  inputLabel: {
    width: 138,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 18.75,
    marginTop: 12,
    marginLeft: 21,
  },
  resetButton: {
    width: 316.8,
    height: 44.14,
    backgroundColor: '#8F00FF',
    borderRadius: 8,
    marginTop: 10,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 18.75,
  },
  rightArrow: {
    width: 27,
    height: 27,
    transform: [{ rotate: '180deg' }],
    marginTop: 107,
  },
});

export default ResetPasswordScreen;

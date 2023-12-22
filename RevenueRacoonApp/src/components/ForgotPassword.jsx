import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6600B7', 'rgba(0, 0, 0, 0.00)']}
        style={styles.topGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      
      <LinearGradient
        colors={['#6600B7', 'rgba(0, 0, 0, 0.00)']}
        style={styles.bottomGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      <TouchableOpacity style={styles.backButton}>
        <Image
          source={{ uri: 'https://i.ibb.co/MMxMb4b/image.png' }}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>

      {/* Content starts below the back button image */}
      <Text style={styles.forgotPasswordText}>Forgot  {'\n'} Password?</Text>
      <Text style={styles.textStyle}>
        Don't worry! It occurs. Please enter the email address linked with your account.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      <TouchableOpacity style={styles.sendCodeButton}>
        <Text style={styles.sendCodeText}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150, // Adjust this to position content below the back button image
  },
  topGradient: {
    width: screenWidth,
    height: 144,
    left: 0,
    top: -3,
    position: 'absolute',
  },
  bottomGradient: {
    width: screenWidth,
    height: 144,
    position: 'absolute',
    bottom: 0,
    transform: [{ rotate: '179.91deg' }],
  },
  backButton: {
    position: 'absolute',
    top: 120,
    left: 10,
    zIndex: 10,
  },
  backButtonImage: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },
  forgotPasswordText: {
    color: '#FFBF00',
    fontSize: 40,
    fontWeight: '600',
    lineHeight: 39,
    textAlign: 'center',
    marginTop: 20, // Adjust as needed
  },
  textStyle: {
    width: screenWidth - 48,
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 20, // Adjust as needed
  },
  inputContainer: {
    marginTop: 20, // Adjust as needed
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8, 
    width: screenWidth - 48,
  },
  sendCodeButton: {
    width: screenWidth - 48,
    height: 44.14,
    backgroundColor: '#8F00FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adjust as needed
  },
  sendCodeText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ForgotPasswordScreen;

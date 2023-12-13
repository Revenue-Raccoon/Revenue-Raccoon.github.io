import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(143, 0, 255, 0.80)', 'rgba(0, 0, 0, 0)']}
        style={styles.topGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <LinearGradient
        colors={['rgba(143, 0, 255, 0.80)', 'rgba(0, 0, 0, 0)']}
        style={styles.bottomGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />

      <Text style={styles.welcomeText}>Welcome back! Glad to see you, Again!</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />
      </View>

      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Don’t have an account? <Text style={styles.registerTextBold}>Register Now</Text>
      </Text>

      <Text style={styles.orLoginWith}>Or Login with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          {/* Add Facebook icon here */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <MaterialCommunityIcons name="google" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topGradient: {
    width: screenWidth,
    height: 144, // Unchanged as per your request
    left: 0,
    top: -3,
    position: 'absolute',
  },
  bottomGradient: {
    width: screenWidth,
    height: 144, // Unchanged as per your request
    position: 'absolute',
    bottom: 0,
    transform: [{ rotate: '179.91deg' }],
  },
  welcomeText: {
    color: '#FFBF00',
    fontSize: 24, // Slightly reduced font size
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    top: 120,    // Reduced top spacing
    left: 56,
    right: 56,
  },
  inputContainer: {
     marginTop: 220, // Reduced margin top
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 8, // Slightly reduced vertical margin
    padding: 10,
  },
  forgotPassword: {
    color: '#FFBF00',
    textAlign: 'right',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#8F00FF',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 16, // Reduced margin top
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  registerText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 16, // Reduced margin top
  },
  registerTextBold: {
    fontWeight: 'bold',
    color: '#FFBF00',
  },
  orLoginWith: {
    color: 'white',
    textAlign: 'center',
    marginTop: 16, // Reduced margin top
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16, // Reduced margin top
  },
  socialButton: {
    // Style for social buttons
  },
  googleButton: {
    // Style for Google button
  },
  // Add any additional styles you need
});

export default LoginScreen;

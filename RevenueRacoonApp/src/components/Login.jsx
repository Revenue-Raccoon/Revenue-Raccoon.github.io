import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const LoginScreen = () => {
      
  return (
   
    <View style={styles.container}>
         <LinearGradient
        colors={['rgba(143, 0, 255, 0.80)', 'rgba(0, 0, 0, 0)']} // הגדרת הצבעים ל-gradient
        style={styles.topGradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
      >
        {/* יצירת גרדיאנט באמצעות LinearGradient */}
      </LinearGradient>
      <LinearGradient
      colors={[ 'rgba(143, 0, 255, 0.80)', 'rgba(0, 0, 0, 0)']}
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
        {/* טקסט נוסף אם רצוי */}
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
     height: 144,
      left: 0,
       top: -3,
        position: 'absolute',
        
  },
  bottomGradient: {
    
  },
  welcomeText: {
    color: '#FFBF00',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    top: 72,
    left: 56,
    right: 56,
  },
  inputContainer: {
    marginTop: 150,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
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
    marginTop: 20,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  registerText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  registerTextBold: {
    fontWeight: 'bold',
    color: '#FFBF00',
  },
  orLoginWith: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialButton: {
    // Style for social buttons
  },
  // Add any additional styles you need
});

export default LoginScreen;

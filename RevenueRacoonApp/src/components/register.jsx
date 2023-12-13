import React, { useState }, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'; // Removed CheckBox from here
import CheckBox from 'expo-checkbox';
import styles from '../styles/registerStyle';
import {LinearGradient} from 'expo-linear-gradient';
const Register = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(143, 0, 255, 0.80)', 'rgba(0, 0, 0, 0)']}
        style={styles.topGradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
      >
        {/* יצירת גרדיאנט באמצעות LinearGradient */}
      </LinearGradient>
      <View style={[styles.bottomGradient, { transform: [{ rotate: '179.91deg' }] }]}>
        {/* יצירת גרדיאנט באמצעות שכבות של View */}
      </View>
      <Text style={styles.welcomeText}>
        Welcome to {'\n'}
        Revenue Raccoon! {'\n'}
        Ready to get rich?!
      </Text>

      <View style={[styles.inputContainer, { top: 208.86 }]}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={[styles.inputContainer, { top: 272.77 }]}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={[styles.inputContainer, { top: 336.69 }]}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={[styles.inputContainer, { top: 400.61 }]}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.input}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <View style={styles.loginWithContainer}>
        <Text style={styles.loginWithText}>Or Login with</Text>
      </View>
      

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Agree and Register</Text>
      </TouchableOpacity>

    

      <View style={styles.termsContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.termsText}>I agree to the </Text>
        <Text style={styles.termsLink}>Terms and Conditions</Text>
      </View>
    
  
    </View>
  );
};

export default Register;

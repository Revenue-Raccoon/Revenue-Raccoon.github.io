import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from '../styles/registerStyle';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'; // Import Axios for making HTTP requests
import globals from '../globals'; // Import the global variable


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Send a POST request to your Flask backend for user registration
      const response = await axios.post('www.revenueraccoon.pro/register', {
        username: username,
        email: email,
        password: password,
      });

      // Check if registration was successful
      if (response.data.message) {
        alert('User registered successfully');
        globals.userId = response.data.user_id;
      } else {
        alert('Registration failed: ' + response.data.error);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(143, 0, 255, 0.80)', 'rgba(0, 0, 0, 0)']}
        style={styles.topGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View style={[styles.bottomGradient, { transform: [{ rotate: '179.91deg' }] }]} />

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

      <Image source={{ uri: 'https://via.placeholder.com/27x27' }} style={styles.image} />

      <View style={styles.termsContainer}>
        <View style={styles.checkbox}></View>
        <Text style={styles.termsText}>I agree to the </Text>
        <Text style={styles.termsLink}>Terms and Conditions</Text>
      </View>
    </View>
  );
};

export default Register;

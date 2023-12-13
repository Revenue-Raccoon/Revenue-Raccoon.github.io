import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'; // Removed CheckBox from here
import CheckBox from 'expo-checkbox';
import styles from '../styles/registerStyle';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// ... other necessary imports ..
const Register = () => {
  const [isSelected, setSelection] = useState(false);
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
    <TouchableOpacity  style={styles.button1}>
      <Image
        source={{ uri: 'https://i.ibb.co/MMxMb4b/image.png' }} // Replace with your image URL if needed
        style={styles.image}
      />
    </TouchableOpacity>
      <Text style={styles.welcomeText}>
        Welcome to {'\n'}
        Revenue Raccoon! {'\n'}
        Ready to get rich?!
      </Text>

      <View style={[styles.inputContainer, { top: 208.86 }]}>
        <TextInput placeholder="Username" style={styles.input} />
      </View>
      <View style={[styles.inputContainer, { top: 272.77 }]}>
        <TextInput placeholder="Email" style={styles.input} />
      </View>
      <View style={[styles.inputContainer, { top: 336.69 }]}>
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
      </View>
      <View style={[styles.inputContainer, { top: 400.61 }]}>
        <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.input} />
      </View>

      <View style={styles.loginWithContainer}>
        {/* Add icons or buttons for login with other services here */}
        <Text style={styles.loginWithText}>Or Login with</Text>
      </View>
      

      <TouchableOpacity style={styles.registerButton}>
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

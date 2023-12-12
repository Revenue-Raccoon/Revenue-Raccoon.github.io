import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/openLoginOrRegisterStyle';
import {LinearGradient} from 'expo-linear-gradient';
const openLoginOrRegister = () => {
    
    return (
        
        <View style={styles.container}>
            <Image source={{ uri: "https://i.ibb.co/Hh1Ly5T/image.png" }} style={styles.backgroundImage} 
            resizeMode="cover"/>

<LinearGradient
      colors={[ 'rgba(143, 0, 255, 0.80)', 'rgba(0, 0, 0, 0)']}
      style={styles.bottomGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    />
            {/* כפתור התחברות */}
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

        
                <Text style={styles.guestText}>Continue as guest</Text>
           

            {/* כפתור רישום */}
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>

            <Image source={{ uri: "https://i.ibb.co/kht1j0F/image.png"}} style={styles.profileImage} />
        </View>
    );
};

export default openLoginOrRegister;

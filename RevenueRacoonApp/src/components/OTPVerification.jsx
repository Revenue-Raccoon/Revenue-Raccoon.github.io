import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OtpVerificationScreen = () => {
  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const [inputValues, setInputValues] = useState(['', '', '', '']);

  const focusNextInput = (index, text) => {
    let updatedValues = [...inputValues];
    updatedValues[index] = text;
    setInputValues(updatedValues);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleBackspace = (index) => {
    if (inputValues[index].length === 0 && index > 0) {
      // Set the previous input's value to empty
      let updatedValues = [...inputValues];
      updatedValues[index - 1] = '';
      setInputValues(updatedValues);

      // Focus the previous input
      inputRefs.current[index - 1].current.focus();
    }
  };

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
      <Text style={styles.otpVerificationText}>OTP Verification</Text>
      <Text style={styles.enterVerificationCodeText}>
        Enter the verification code we just sent to your email address.
      </Text>
      <View style={styles.otpInputContainer}>
        <View style={styles.otpInput}>
          {Array.from({ length: 4 }).map((_, index) => (
            <TextInput
              ref={inputRefs.current[index]}
              style={styles.otpInputBox}
              keyboardType="numeric"
              maxLength={1}
              value={inputValues[index]}
              onChangeText={(newText) => focusNextInput(index, newText)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(index);
                }
              }}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.didntReceiveCodeText}>
        Didn't receive the code?{' '}
        <Text style={styles.resendLink}>Resend</Text>
      </Text>
      <TouchableOpacity style={styles.backButton}>
        <Image
          source={{ uri: 'https://i.ibb.co/MMxMb4b/image.png' }}
          style={styles.backButtonImage}
        />
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
    justifyContent: 'center',
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
  otpVerificationText: {
    color: '#FFBF00',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 39,
    marginTop: 150, // Increased from 119 to 150
  },  
  enterVerificationCodeText: {
    width: 331,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 192,
    textAlign: 'center',
  },
  otpInputContainer: {
    width: 328.13,
    height: 60,
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInput: {
    flexDirection: 'row',
    
  },
  otpInputBox: {
    width: 69.13,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#35C2C1',
    marginHorizontal: 13,
    backgroundColor: 'white',
    textAlign: 'center', // Align text horizontally
    paddingTop: 18, // Adjust these values
    paddingBottom: 18, // Adjust these values
    fontSize: 24, // Your desired font size
  },
  
  
  
  blankInput: {
    width: 69.13,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#35C2C1',
    position: 'absolute',
  },
  rectangleInput: {
    width: 69.13,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1.2,
    borderColor: '#35C2C1',
    position: 'absolute',
  },
  otpDigit: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Urbanist',
    fontWeight: '700',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: -6 }, { translateY: -13 }],
  },
  verifyButton: {
    width: screenWidth - 48,
    height: 44.14,
    backgroundColor: '#8F00FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adjust as needed
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  didntReceiveCodeText: {
    marginTop: 140,
    color: 'white',
    textAlign: 'center',
  },
  resendLink: {
    color: '#FFBF00',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0.15,
  },
  rightArrow: {
    width: 27,
    height: 27,
    transform: [{ rotate: '180deg' }],
    marginTop: 108,
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
});

export default OtpVerificationScreen;

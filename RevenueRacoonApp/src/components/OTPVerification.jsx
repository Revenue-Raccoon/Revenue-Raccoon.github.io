import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OtpVerificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop} />
      <View style={styles.gradientBottom} />
      <Text style={styles.otpVerificationText}>OTP Verification</Text>
      <Text style={styles.enterVerificationCodeText}>
        Enter the verification code we just sent to your email address.
      </Text>
      <View style={styles.otpInputContainer}>
        <View style={styles.otpInput}>
          <View style={styles.otpInputBox}>
            <View style={styles.blankInput} />
            <Text style={styles.otpDigit}>0</Text>
          </View>
          <View style={styles.otpInputBox}>
            <View style={styles.rectangleInput} />
            <Text style={styles.otpDigit}>5</Text>
          </View>
          <View style={styles.otpInputBox}>
            <View style={styles.rectangleInput} />
            <Text style={styles.otpDigit}>5</Text>
          </View>
          <View style={styles.otpInputBox}>
            <View style={styles.rectangleInput} />
            <Text style={styles.otpDigit}>1</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.didntReceiveCodeText}>
        Didn't receive the code?{' '}
        <Text style={styles.resendLink}>Resend</Text>
      </Text>
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
    height: 144,
    position: 'absolute',
    backgroundColor: 'rgba(143, 0, 255, 0.80)',
  },
  gradientBottom: {
    width: '100%',
    height: 179,
    position: 'absolute',
    bottom: 0,
    transform: [{ rotate: '179.91deg' }],
    backgroundColor: 'linear-gradient(180deg, rgba(143, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0) 100%)',
  },
  otpVerificationText: {
    color: '#FFBF00',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: 39,
    marginTop: 119,
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
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 316.8,
    height: 44.14,
    backgroundColor: '#8F00FF',
    borderRadius: 8,
    marginTop: 10,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 18.75,
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
});

export default OtpVerificationScreen;

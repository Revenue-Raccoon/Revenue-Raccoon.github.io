import { StyleSheet, Dimensions } from 'react-native';
import * as Font from 'expo-font'; // ספריית הגופנים
const screenWidth = Dimensions.get('window').width;

async function loadFonts() {
  await Font.loadAsync({
    'Poppins-semiBold': require('../assets/font//Poppins-SemiBold.ttf'),
  });
}

const registerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center', // Centers children horizontally in the container
  },
  topGradient: {
    width: screenWidth,
    height: 144,
    position: 'absolute',
    top: 0,
    left: 0
  },
  welcomeText: {
    position: 'absolute',
    top: 69,
    textAlign: 'center',
    color: '#FFBF00',
    fontSize: 30,
    fontFamily: '',
    fontWeight: '600',
  },
  inputContainer: {
    position: 'absolute',
    top: 208.86, // Adjust as needed
    width: screenWidth - 48,
    height: 50.41,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  input: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    fontSize: 15,
    fontFamily: '',
  },
  loginWithContainer: {
    position: 'absolute',
    top: 559, // Adjust as needed
    width: 330,
    height: 95,
    alignItems: 'center',
  },
  loginWithText: {
    color: 'white',
    fontSize: 14,
    fontFamily: '',
  },
  registerButton: {
    position: 'absolute',
    top: 495, // Adjust as needed
    width: screenWidth - 48,
    height: 50.41,
    backgroundColor: '#8F00FF',
    borderRadius: 8,
  },
  registerButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: '',//Inter
    fontWeight: '700',
    marginTop: 15,
  },
  image: {
    position: 'absolute',
    top: 96, // Adjust as needed
    width: 27,
    height: 27,
  },
  termsContainer: {
    position: 'absolute',
    top: 468, // Adjust as needed
    
    width: screenWidth - 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 12,
    height: 13,
    borderWidth: 1,
    borderColor: '#FFBF00',
    marginRight: 9,
  },
  termsText: {
    color: 'rgba(255, 255, 255, 0.67)',
    fontSize: 13,
    fontFamily: '',//Inter
  },
  termsLink: {
    color: '#FFBF00',
    fontSize: 13,
    fontFamily: '',//Inter
  },
  bottomGradient: {
    width: screenWidth,
    height: 144,
    position: 'absolute',
    bottom: 0,
    transform: [{ rotate: '179.91deg' }],
  },
  button1: {
    width: 27,
    height: 27,
    position: 'absolute',
    top: 30, // תואם לעיצוב שלך
    width: screenWidth - 48 , // צמוד לצד שמאל של המסך
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  
  

});

export default registerStyle;

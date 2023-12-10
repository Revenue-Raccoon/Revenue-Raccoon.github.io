import { StyleSheet } from 'react-native';

const registerStyle = StyleSheet.create({
  container: {
    flex: 1, // מגדיר שהרכיב ימתח לכל המסך
    backgroundColor: 'black',
  },
  topGradient: {
    width: 362,
    height: 144,
    position: 'absolute',
    top: 0,
    
    left: 0
  },
  bottomGradient: {
    width: 360.77,
    height: 178.26,
    position: 'absolute',
    left: 360.05,
    top: 756.25,
  },
      welcomeText: {
        width: 317,
        position: 'absolute',
        top: 69,
        left: 23,
        textAlign: 'center',
        color: '#FFBF00',
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: '600',
      },
      inputContainer: {
        width: 316.80,
        height: 50.41,
        position: 'absolute',
        left: 24,
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
        fontFamily: 'Poppins',
      },
      loginWithContainer: {
        width: 330,
        height: 95,
        position: 'absolute',
        top: 559,
        left: 17,
        alignItems: 'center',
      },
      loginWithText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins',
      },
      registerButton: {
        width: 316.80,
        height: 50.41,
        position: 'absolute',
        top: 495,
        left: 22,
        backgroundColor: '#8F00FF',
        borderRadius: 8,
      },
      registerButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '700',
        marginTop: 15,
      },
      image: {
        width: 27,
        height: 27,
        position: 'absolute',
        top: 96,
        left: 50,
      },
      termsContainer: {
        width: 249,
        position: 'absolute',
        top: 468,
        left: 26,
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
        fontFamily: 'Inter',
      },
      termsLink: {
        color: '#FFBF00',
        fontSize: 13,
        fontFamily: 'Inter',
      },
    });
    

export default registerStyle;

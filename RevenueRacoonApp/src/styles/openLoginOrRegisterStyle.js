import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const openLoginOrRegisterStyle = StyleSheet.create({
    container: {
        flex: 1, // משתמש ב-flex כדי למלא את כל המסך
        backgroundColor: 'black',
        alignItems: 'center', // ממרכז את התוכן אופקית
        justifyContent: 'center', // ממרכז את התוכן אנכית
    },
    bottomGradient: {
        width: screenWidth,
        height: 144,
        position: 'absolute',
        bottom: 0,
        transform: [{ rotate: '179.91deg' }],
      },
    backgroundImage: {
        width: screenWidth, 
        height: 400, 
        position: 'absolute', 
        opacity: 0.75,
        top: 1, 
        
        
       
    },
    loginButton: {
        width: 316.80, 
        height: 44.14, 
        position: 'absolute', 
        backgroundColor: '#8F00FF', 
        borderRadius: 8,
        top: 444,
        alignSelf: 'center', // ממרכז את הכפתור אופקית
        justifyContent: 'center', // ממרכז את התוכן אנכית
        alignItems: 'center', // ממרכז את התוכן אופקית
    },
    
    loginText: {
        color: 'white', 
        fontSize: 15, 
        fontFamily: 'Urbanist', 
        fontWeight: '700',
    },
    gradientBox: {
        width: 360, 
        height: 178.26, 
        position: 'absolute', 
        transform: [{ rotate: '179.91deg' }],
        backgroundColor: 'transparent',
        top: 640.25,
        left: 360.28,
        justifyContent: 'center', // ממרכז את התוכן אנכית
        alignItems: 'center', // ממרכז את התוכן אופקית
        // אין תמיכה ישירה ב- linear gradient ב-React Native, יש להשתמש בספרייה חיצונית
    },
    
    guestText: {
        position: 'absolute', 
        textAlign: 'center', 
        color: '#FFBF00', 
        fontSize: 14, 
        fontFamily: 'Urbanist', 
        fontWeight: '700', 
        textDecorationLine: 'underline',
        top: 599,
        left: 133,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',

    },
    registerButton: {
        width: 316.80, 
        height: 44.14, 
        position: 'absolute', 
        backgroundColor: '#8F00FF', 
        borderRadius: 8,
        top: 515,
        alignSelf: 'center', // ממרכז את הכפתור אופקית
        justifyContent: 'center', // ממרכז את התוכן אנכית
        alignItems: 'center', // ממרכז את התוכן אופקית
    },
    
    registerText: {
        color: 'white', 
        fontSize: 15, 
        fontFamily: 'Urbanist', 
        fontWeight: '700',
    },
    profileImage: {
        width: 290, 
        height: 290, 
        position: 'absolute', 
        opacity: 0.85, 
        borderRadius: 120,
        top: 37,
        
    }
});

export default openLoginOrRegisterStyle;

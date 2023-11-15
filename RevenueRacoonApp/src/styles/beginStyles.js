import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  raccoonImage: {
    width: 150,
    height: 150
  },
  textContainer: {
    position: 'absolute', 
    top: 100 
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  subHeader: {
    fontSize: 20,
    color: '#555'
  }
});

export default styles;
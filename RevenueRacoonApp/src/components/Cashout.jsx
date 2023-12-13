import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    backgroundColor: 'black',
    position: 'relative',
  },
  text: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  dogCollarText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  priceForCustomer: {
    color: 'black',
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 12,
  },
  profit: {
    color: 'black',
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 12,
  },
  rotatedBorder: {
    width: 1,
    height: 14,
    backgroundColor: 'black',
    transform: [{ rotate: '90deg' }],
  },
  rectangle34624315: {
    width: 360,
    height: 293,
    backgroundColor: 'linear-gradient(180deg, #9E7700 0%, rgba(0, 0, 0, 0) 100%)',
    position: 'absolute',
    top: 0,
  },
  rectangle34624316: {
    width: 360,
    height: 534,
    backgroundColor: 'linear-gradient(180deg, #7D00DE 0%, rgba(0, 0, 0, 0) 100%)',
    position: 'absolute',
    top: 640,
    transform: [{ rotate: '180deg' }],
  },
  cashout: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 64,
  },
  bigText: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'Poppins',
    fontWeight: '800',
    textAlign: 'center',
  },
  nextTime: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { left: 298, top: 939 }]}>36$</Text>
      <Text style={[styles.text, { left: 135, top: 939 }]}>36$</Text>
      <Text style={[styles.text, { left: 231, top: 939 }]}>9$</Text>
      <Text style={[styles.text, { left: 68, top: 939 }]}>9$</Text>
      <Text style={[styles.dogCollarText, { left: 222, top: 916 }]}>dog collar</Text>
      <Text style={[styles.dogCollarText, { left: 59, top: 916 }]}>dog collar</Text>
      <Text style={[styles.priceForCustomer, { left: 239, top: 940 }]}>price for {'\n'} customer:</Text>
      <Text style={[styles.priceForCustomer, { left: 76, top: 940 }]}>price for {'\n'} customer:</Text>
      <Text style={[styles.profit, { left: 177, top: 943 }]}>profit :</Text>
      <Text style={[styles.profit, { left: 14, top: 943 }]}>profit :</Text>
      <View style={[styles.rotatedBorder, { left: 248, top: 940 }]}></View>
      <View style={[styles.rotatedBorder, { left: 85, top: 940 }]}></View>
      <Text style={[styles.text, { left: 393, top: 511 }]}>36$</Text>
      <View style={styles.rectangle34624315} />
      <View style={styles.rectangle34624316} />
      <Text style={styles.bigText}>54,043.91$!</Text>
      <Text style={styles.cashout}>CASHOUT</Text>
      <Image
        style={{
          width: 152.38,
          height: 155.85,
          left: -91.44,
          top: 42.36,
          position: 'absolute',
          transform: [{ rotate: '-32.27deg' }],
        }}
        source={{ uri: 'https://via.placeholder.com/152x156' }}
      />
      {/* Add more images here */}
      <Text style={[styles.text, { left: 52, top: 50, transform: [{ rotate: '180deg' }] }]}>27$</Text>
      <View style={{ width: 315, height: 53, left: 22, top: 396, position: 'absolute', backgroundColor: 'linear-gradient(180deg, #FFBF00 0%, #9C7100 100%)', borderRadius: 10, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1 }}>
        <Text style={styles.cashout}>CASHOUT</Text>
      </View>
      <View style={{ width: 11, height: 11, left: 323, top: 399, position: 'absolute', backgroundColor: 'white', borderWidth: 1, borderColor: 'white' }}></View>
      <Text style={styles.nextTime}>Next Time</Text>
    </View>
  );
};

export default YourComponent;



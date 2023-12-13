import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>36$</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>36$</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>9$</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>9$</Text>
      </View>
      <Text style={styles.dogCollarText}>dog collar</Text>
      <Text style={styles.dogCollarText}>dog collar</Text>
      <View style={styles.priceForCustomerContainer}>
        <Text style={styles.priceForCustomerText}>price for costumer:</Text>
      </View>
      <View style={styles.priceForCustomerContainer}>
        <Text style={styles.priceForCustomerText}>price for costumer:</Text>
      </View>
      <View style={styles.profitContainer}>
        <Text style={styles.profitText}>profit:</Text>
      </View>
      <View style={styles.profitContainer}>
        <Text style={styles.profitText}>profit:</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>36$</Text>
      </View>
      <View style={styles.gradient} />
      <Image
        style={styles.productImage}
        source={{ uri: 'https://via.placeholder.com/277x272' }}
      />
      <View style={styles.line} />
      <View style={styles.line} />
      <Text style={styles.productTitle}>DYI outotune Mic</Text>
      <Text style={styles.productDescription}>
        Description: The DYI mic is a special mic with built-in auto-tune works
        for TikTok and sounds good for anyone in any language. All you need is
        the mic and a computer to sound like BEYONCE! Profit margin: 50%
      </Text>
      <Text style={styles.productDescription}>
        Make sure: Your viewers know that the Mic only works with a computer but
        is very simple to use and has instructions on the website.
      </Text>
      <Text style={styles.productDescription}>
        Recommended niches: Music, Band theme pages, Cover page
      </Text>
      <View style={styles.copyLinkButton}>
        <Text style={styles.copyLinkText}>COPY LINK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  priceContainer: {
    width: 20,
    height: 11,
    position: 'absolute',
    color: 'black',
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  priceText: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  dogCollarText: {
    width: 158,
    height: 27,
    position: 'absolute',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  priceForCustomerContainer: {
    width: 75,
    height: 12,
    position: 'absolute',
    textAlign: 'center',
    color: 'black',
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  priceForCustomerText: {
    color: 'black',
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  profitContainer: {
    width: 75,
    height: 13,
    position: 'absolute',
    textAlign: 'center',
    color: 'black',
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  profitText: {
    color: 'black',
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  line: {
    width: 14,
    height: 0,
    position: 'absolute',
    transform: [{ rotate: '90deg' }],
    border: '1px black solid',
  },
  gradient: {
    width: 360,
    height: 108,
    position: 'absolute',
    backgroundColor: 'linear-gradient(180deg, #8F00FF 0%, black 100%)',
  },
  productImage: {
    width: 277,
    height: 272,
    position: 'absolute',
    mixBlendMode: 'hard-light',
  },
  productTitle: {
    width: 360,
    height: 34,
    position: 'absolute',
    color: '#FFBF00',
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  productDescription: {
    width: 315,
    height: 115,
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  copyLinkButton: {
    width: 315,
    height: 62,
    position: 'absolute',
    backgroundColor: 'linear-gradient(180deg, #8F00FF 0%, #5D00A6 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset',
    borderRadius: 10,
  },
  copyLinkText: {
    width: 257,
    height: 57,
    position: 'absolute',
    color: 'white',
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
});

export default ProductPage;

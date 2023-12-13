import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LinkHomepageMarketplaceScreen = () => {
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
      <Text style={styles.friendsRichText}>Friends Rich?!</Text>
      <Text style={styles.wantToGetYourText}>Want to get your</Text>
      <Text style={styles.sendThemAnInvitationLinkText}>send them an invitation link</Text>
      <TouchableOpacity style={styles.copyLinkButton}>
        <View style={styles.copyLinkContainer}>
          <Text style={styles.copyLinkText}>Copy link</Text>
          <View style={styles.vector} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareViaButton}>
        <View style={styles.shareViaContainer}>
          <Text style={styles.shareViaText}>Share via..</Text>
          <View style={styles.vector} />
        </View>
      </TouchableOpacity>
      <Text style={styles.nextTimeText}>Next Time</Text>
      <View style={styles.vector} />
      <View style={styles.vector} />
      <View style={styles.vector} />
      <View style={styles.vector} />
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
    height: 311,
    position: 'absolute',
    transform: [{ rotate: '-180deg' }],
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  friendsRichText: {
    width: 360,
    height: 34,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 44,
    fontFamily: 'Poppins',
    fontWeight: '800',
  },
  wantToGetYourText: {
    width: 338,
    height: 34,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  sendThemAnInvitationLinkText: {
    width: 338,
    height: 34,
    position: 'absolute',
    textAlign: 'center',
    color: '#FFB500',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  copyLinkButton: {
    width: 315,
    height: 53,
    position: 'absolute',
    backgroundColor: 'linear-gradient(180deg, #FFBF00 0%, #9C7100 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset',
    borderRadius: 10,
  },
  copyLinkContainer: {
    width: 257,
    height: 57,
    position: 'absolute',
    color: 'white',
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  copyLinkText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  vector: {
    width: 11,
    height: 11,
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px white solid',
  },
  shareViaButton: {
    width: 315,
    height: 53,
    position: 'absolute',
    backgroundColor: 'linear-gradient(180deg, #FFBF00 0%, #9C7100 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset',
    borderRadius: 10,
  },
  shareViaContainer: {
    width: 176,
    height: 57,
    position: 'absolute',
    color: 'white',
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  shareViaText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '700',
  },
  nextTimeText: {
    width: 102,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    textDecoration: 'underline',
  },
});

export default LinkHomepageMarketplaceScreen;


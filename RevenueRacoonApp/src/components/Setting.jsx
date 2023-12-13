import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop} />
      <View style={styles.gradientBottom} />
      <Image
        style={styles.arrowIcon}
        source={require('https://via.placeholder.com/27x27')}
      />
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Image
            style={styles.searchIcon}
            source={require('https://via.placeholder.com/20x20')}
          />
          <Text style={styles.searchText}>Search here</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.groupItem}>
        <View style={styles.groupBackground}>
          <Text style={styles.groupText}>Details</Text>
          <Text style={styles.groupSubText}>name, password, change password</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.groupItem}>
        <View style={styles.groupBackground}>
          <Text style={styles.groupText}>Invite Friend</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.groupItem}>
        <View style={styles.groupBackground}>
          <Text style={styles.groupText}>Help/Support</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.groupItem}>
        <View style={styles.groupBackground}>
          <Text style={styles.groupText}>Privacy Policy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchItem}>
        <View style={styles.switchBackground}>
          <Text style={styles.switchText}>sound on</Text>
          <View style={styles.switchCircle} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchItem}>
        <View style={styles.switchBackground}>
          <Text style={styles.switchText}>notifications on</Text>
          <View style={styles.switchCircle} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
    height: 180,
    position: 'absolute',
    backgroundColor: 'rgba(143, 0, 255, 0.80)',
    transform: [{ rotate: '179.91deg' }],
  },
  gradientBottom: {
    width: '100%',
    height: 180,
    position: 'absolute',
    bottom: 0,
    backgroundColor:
      'linear-gradient(180deg, rgba(143, 0, 255, 0.80) 0%, rgba(0, 0, 0, 0) 100%)',
  },
  arrowIcon: {
    width: 27,
    height: 27,
    left: 46,
    top: 47,
    position: 'absolute',
    transform: [{ rotate: '-180deg' }],
  },
  searchContainer: {
    width: 305,
    height: 44,
    left: 33,
    top: 65,
    position: 'absolute',
    backgroundColor: '#111319',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  groupItem: {
    width: 250,
    height: 45,
    left: 60,
    position: 'absolute',
    top: 135,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  groupSubText: {
    color: '#8F00FF',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
  switchItem: {
    width: 250,
    height: 45,
    left: 60,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  switchText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
  switchCircle: {
    width: 21,
    height: 21,
    borderRadius: 9999,
    backgroundColor: 'white',
  },
  logoutButton: {
    width: 250,
    height: 28,
    left: 57,
    top: 477,
    position: 'absolute',
    justifyContent: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    wordWrap: 'break-word',
  },
});

export default SettingScreen;

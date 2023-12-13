import React from 'react';
import { StatusBar } from 'expo-status-bar';  
import Routes from '../src/functions/Routes'; // Make sure the path to Routes is correct
import { I18nManager } from 'react-native';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
if (I18nManager.isRTL) {
  I18nManager.swapLeftAndRightInRTL(false);
  Expo.Updates.reloadAsync();  // אםד אתה משתמש ב-Expo
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes /> 
    </>
  );
}

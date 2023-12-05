import React from 'react';
import { StatusBar } from 'expo-status-bar';  
import Routes from '../src/functions/Routes'; // Make sure the path to Routes is correct

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes /> 
    </>
  );
}

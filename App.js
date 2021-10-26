import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/navigator/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />      
      <StatusBar />
    </NavigationContainer>
  );
}
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppStackNavigator from './src/navigator/Navigator';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SourceSansPro_200ExtraLight,
  SourceSansPro_200ExtraLight_Italic,
  SourceSansPro_300Light,
  SourceSansPro_300Light_Italic,
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
  SourceSansPro_600SemiBold,
  SourceSansPro_600SemiBold_Italic,
  SourceSansPro_700Bold,
  SourceSansPro_700Bold_Italic,
  SourceSansPro_900Black,
  SourceSansPro_900Black_Italic,
} from '@expo-google-fonts/source-sans-pro';
// import context
import UserProvider from './src/context/context';

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_200ExtraLight,
    SourceSansPro_200ExtraLight_Italic,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
    SourceSansPro_700Bold,
    SourceSansPro_700Bold_Italic,
    SourceSansPro_900Black,
    SourceSansPro_900Black_Italic,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <UserProvider>
        <NavigationContainer 
          theme={{
            dark: true,
            colors: {
              ...DefaultTheme.colors,
              background: '#040f28',
              // card: '#mycolor',
            },
          }}
        >
          <StatusBar />
          <AppStackNavigator />
          {/* <AppTabNavigator /> */}
        </NavigationContainer>
      </UserProvider>
    );
    
  }
}
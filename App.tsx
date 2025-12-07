import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Route } from './src/routes';
import FlashMessage from 'react-native-flash-message';
import { ShimmerProvider } from 'react-native-fast-shimmer';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <ShimmerProvider duration={1000}>
          <Route />
        </ShimmerProvider>
        <FlashMessage position={'top'} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

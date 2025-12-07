import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from '../pages';
import SplashScreen from '../pages/SplashScreen';
import DetailPost from '../pages/DetailPost';

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  SplashScreen: undefined;
  DetailPost: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPost"
        component={DetailPost}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

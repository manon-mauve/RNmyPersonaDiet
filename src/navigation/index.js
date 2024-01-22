import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen/LoginScreen.js';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen.js';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import HomePageScreen from '../screens/HomePageScreen/HomePageScreen.js';

const Stack = createNativeStackNavigator();

export default function Navigation() { 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


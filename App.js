import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Login from './src/screens/login/index.js';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home/index';
import ForgotPassword from './src/screens/ForgotPassword/index';
import SignUp from './src/screens/SignUp/index';
import ScreenHeader from './src/components/Header/index.js';

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
App = () => {
  return <AppStack />;
};

export default App;

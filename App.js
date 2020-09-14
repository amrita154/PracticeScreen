import React from 'react';
import Login from './src/screens/login/index';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home/index';
import ForgotPassword from './src/screens/ForgotPassword/index';
import SignUp from './src/screens/SignUp/index';
import MovieDetails from './src/screens/MovieDetails';
import SearchMovie from './src/screens/SearchMovie/index';

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{username: 'Login', disabled: false}}></Stack.Screen>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}></Stack.Screen>
        <Stack.Screen name="SearchMovie" component={SearchMovie}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
App = () => {
  return <AppStack />;
};

export default App;

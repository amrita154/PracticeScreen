import Home from './../../screens/Home';
import React from 'react';
import {Text} from 'react-native';
import Login from './../../screens/login';
import 'react-native-gesture-handler';
import SignUp from './../../screens/SignUp';
import SearchMovie from './../../screens/SearchMovie';
import {createStackNavigator} from '@react-navigation/stack';
import getHeaderTitle from '../Header/headerTitle';
import styles from './style';
import getHeaderLeft from '../Header/headerLeft';
import getHeaderRight from '../Header/headerRight';
import MovieStack from './MovieStack';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitle: getHeaderTitle(route.name),
        headerStyle: styles.headerStyle,
        headerTintColor: '#EBF2FA',
        headerLeft: () => getHeaderLeft(navigation),
        headerRight: () => getHeaderRight(navigation),
      })}>
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{username: 'Login', disabled: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;

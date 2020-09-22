import React from 'react';
import Login from './../../screens/login';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './../../screens/SignUp';
import getHeaderTitle from '../Header/headerTitle';
import styles from './style';
import getHeaderLeft from '../Header/headerLeft';
import getHeaderRight from '../Header/headerRight';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitle: getHeaderTitle(route.name),
        headerStyle: styles.headerStyle,
        headerTintColor: '#EBF2FA',
        headerLeft: () => getHeaderLeft(navigation),
        headerRight: () => getHeaderRight(navigation),
      })}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

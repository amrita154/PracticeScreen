import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/login';
import SignUp from '../../screens/SignUp';
import ForgotPassword from '../../screens/ForgotPassword';
import getHeaderLeft from './../Header/headerLeft';
import getHeaderRight from './../Header/headerRight';
import getHeaderTitle from './../Header/headerTitle';
import styles from './style';
import {createCompatNavigatorFactory} from '@react-navigation/compat';

const Stack = createStackNavigator();

function LoginStack() {
  //console.log('Yes');
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitle: getHeaderTitle(route.name),
        headerStyle: styles.headerStyle,
        headerTintColor: '#EBF2FA',
        headerRight: () => getHeaderRight(navigation),
      })}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={({route, navigation}) => ({
          headerLeft: () => getHeaderLeft(route, navigation),
        })}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default LoginStack;

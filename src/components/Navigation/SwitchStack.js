import React, {useState, useEffect, useReducer, useContext} from 'react';
import {
  createSwitchNavigator,
  createCompatNavigatorFactory,
} from '@react-navigation/compat';
import LoginStack from './LoginStack';
import SideDrawer from './SideDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../screens/login';
import Home from '../../screens/Home';
import {act} from 'react-test-renderer';
import getHeaderTitle from '../Header/headerTitle';
import styles from './style';
import getHeaderLeft from '../Header/headerLeft';
import getHeaderRight from '../Header/headerRight';

const Stack = createStackNavigator();

export const AuthContext = React.createContext();

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        email: action.data,
        isloggedIn: true,
      };
    case 'SIGN_OUT':
      return {
        email: null,
        isloggedIn: false,
      };
  }
};
function SwitchStack({navigation}) {
  const [state, setState] = React.useReducer(reducer, {
    email: '',
    isLoggedIn: false,
  });

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let email;
      try {
        email = await AsyncStorage.getItem('username');
        console.log(email);
      } catch (e) {}
      if (email !== null) setState({type: 'SIGN_IN', data: email});
      else setState({type: 'SIGN_OUT', data: ''});
    };
    bootstrapAsync();
  }, []);

  const authcontext = React.useMemo(() => ({
    signIn: async (data) => {
      alert('Logged In!!');
      setState({type: 'SIGN_IN', data: data});
    },
    signOut: async () => {
      alert('Logged Out');
      email = await AsyncStorage.getItem('username');
      console.log(email);
      setState({type: 'SIGN_OUT', data: ''});
    },
  }));

  return (
    <AuthContext.Provider value={{authcontext, username: state.email}}>
      <Stack.Navigator
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          animationEnabled: false,
        })}>
        {state.isloggedIn == false ? (
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen
            name="AppStack"
            component={SideDrawer}
            options={{
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default SwitchStack;

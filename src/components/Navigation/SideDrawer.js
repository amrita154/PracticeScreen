import React from 'react';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';

import LogOut from './../../screens/LogOut';
import HomeStack from './HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import {createCompatNavigatorFactory} from '@react-navigation/compat';

const Drawer = createDrawerNavigator();

const SideDrawer = ({route}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={LogOut} />
    </Drawer.Navigator>
  );
};
export default SideDrawer;

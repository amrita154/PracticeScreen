import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './style';
import Home from '../../screens/Home';
import SearchMovie from '../../screens/SearchMovie';

import LogOut from '../../screens/LogOut';
import {createCompatNavigatorFactory} from '@react-navigation/compat';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: styles.tabStyle,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        labelStyle: styles.labelStyle,
        labelPosition: 'below-icon',
      }}
      initialRouteName="Profile">
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Movie" component={SearchMovie}></Tab.Screen>
      <Tab.Screen name="Profile" component={LogOut}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;

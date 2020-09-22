import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import MovieStack from './MovieStack';
import styles from './style';

const Tab = createBottomTabNavigator();
const TabScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: styles.tabStyle,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        labelStyle: styles.labelStyle,
        labelPosition: 'below-icon',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        initialParams={{username: 'Login', disabled: false}}></Tab.Screen>
      <Tab.Screen name="Movie" component={MovieStack}></Tab.Screen>

      <Tab.Screen name="Profile" component={ProfileStack}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabScreen;

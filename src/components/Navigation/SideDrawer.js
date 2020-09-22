import React from 'react';
import 'react-native-gesture-handler';
import TabScreen from './BottomTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ProfileStack from './ProfileStack';
import MovieStack from './MovieStack';

const Drawer = createDrawerNavigator();
const SideDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabScreen} />
        <Drawer.Screen name="Profile" component={ProfileStack} />
        <Drawer.Screen name="Movie" component={MovieStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default SideDrawer;

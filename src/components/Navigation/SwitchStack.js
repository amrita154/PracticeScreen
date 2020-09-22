import React, {useState, useEffect} from 'react';
import {
  createSwitchNavigator,
  createCompatNavigatorFactory,
} from '@react-navigation/compat';
import LoginStack from './LoginStack';
import SideDrawer from './SideDrawer';

const SwitchStack = createCompatNavigatorFactory(
  createSwitchNavigator(
    {
      LoginStack: {LoginStack},
      AppStack: {SideDrawer},
    },
    {
      initialRouteName: 'LoginStack',
    },
  ),
);
export default SwitchStack;

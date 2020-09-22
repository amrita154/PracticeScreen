import React from 'react';
import 'react-native-gesture-handler';
import SideDrawer from './src/components/Navigation/SideDrawer';
import SwitchStack from './src/components/Navigation/SwitchStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SwitchStack />
    </NavigationContainer>
  );
};
export default App;

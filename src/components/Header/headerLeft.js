import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BaseRouter} from '@react-navigation/native';

function getHeaderLeft(route, navigation) {
  return (
    <Icon
      name="menu"
      color="white"
      size={40}
      onPress={() => navigation.toggleDrawer()}
    />
  );
}

export default getHeaderLeft;

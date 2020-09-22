import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

function getHeaderLeft(navigation) {
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

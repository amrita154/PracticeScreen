import React from 'react';
import Logo from './../Logo';
function getHeaderRight(navigation) {
  return (
    <Logo
      onPress={() => navigation.navigate('Home')}
      source={require('./../../assets/Logo.png')}
      style={{height: 40, width: 40}}
    />
  );
}

export default getHeaderRight;

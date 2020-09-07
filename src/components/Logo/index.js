import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Logo = ({source, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={style}></Image>
    </TouchableOpacity>
  );
};

export default Logo;

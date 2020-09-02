import React from 'react';
import {Button} from 'react-native';

CustomButton = ({value, style, color, onPress}) => {
  return (
    <Button
      title={value}
      style={style}
      color={color}
      onPress={onPress}></Button>
  );
};

export default CustomButton;

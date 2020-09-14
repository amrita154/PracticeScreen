import React from 'react';
import {Button} from 'react-native';

const CustomButton = ({value, style, onPress}) => {
  return <Button title={value} style={style} onPress={onPress}></Button>;
};

export default CustomButton;

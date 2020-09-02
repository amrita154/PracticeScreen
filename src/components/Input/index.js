import React from 'react';
import {Text, View, TextInput} from 'react-native';

Input = ({style,value,secureTextEntry,onChangeText}) => {
  return (
    <TextInput
      style={style}
      placeholder={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      underlineColorAndroid='transparent'></TextInput>
      
  );
};

export default Input;

import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({style, value, secureTextEntry, onChangeText, defaultValue}) => {
  return (
    <TextInput
      style={style}
      placeholder={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      defaultValue={defaultValue}
      underlineColorAndroid="transparent"></TextInput>
  );
};

export default Input;

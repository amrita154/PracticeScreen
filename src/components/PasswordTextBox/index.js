import React from 'react';
import {Text, View, TextInput} from 'react-native';

PasswordTextBox = ({style,value,secureTextEntry,onChangeText}) => {
  return (
      <View>
    <TextInput
      style={style}
      placeholder={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      underlineColorAndroid='transparent'></TextInput>
      </View>
  );
};

export default PasswordTextBox;

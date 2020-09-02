import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

TouchableText = ({styleButton,onPress,styleText,value}) => {
  return (
    <TouchableOpacity style={styleButton} onPress={onPress}>
      
      <Text style={styleText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default TouchableText;

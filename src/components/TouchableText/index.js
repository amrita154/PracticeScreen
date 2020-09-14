import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

const TouchableText = ({styleButton, onPress, styleText, value, disabled}) => {
  return (
    <TouchableOpacity style={styleButton} onPress={onPress} disabled={disabled}>
      <Text style={styleText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default TouchableText;

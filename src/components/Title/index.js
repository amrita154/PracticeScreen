import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './style';

const Title = ({style, value}) => {
  return <Text style={[styles.textStyle, style]}>{value}</Text>;
};

export default Title;

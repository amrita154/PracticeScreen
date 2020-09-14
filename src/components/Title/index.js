import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './style';

const Title = ({style, value}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, style]}>{value}</Text>
    </View>
  );
};

export default Title;

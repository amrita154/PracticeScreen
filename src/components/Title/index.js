import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

Title = ({style,value}) => {
  return (
    <View
      style={styles.container}>
      <Text style={[styles.textStyle,style]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Title;

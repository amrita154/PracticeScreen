import React from 'react';
import {Text, View, Button} from 'react-native';
import Title from './../../components/Title/index';
import styles from './style';
export default ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title value="Forgot Password"></Title>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}></Button>
    </View>
  );
};

import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './style';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title value="Sign Up"></Title>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};
export default SignUp;

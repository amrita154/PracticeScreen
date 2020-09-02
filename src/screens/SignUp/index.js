import React from 'react';
import {Text, View, Button} from 'react-native';

SignUp = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Title value="Sign Up"></Title>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};
export default SignUp;

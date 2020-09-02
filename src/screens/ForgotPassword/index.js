import React from 'react';
import {Text, View,Button} from 'react-native';
import Title from './../../components/Title/index';
export default ForgotPassword = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Title value="Forgot Password"></Title>
      <Button title="Login" onPress={()=> navigation.navigate('Login')}></Button>
    </View>
  );
};

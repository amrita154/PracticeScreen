import React from 'react';
import {Text, View, Button} from 'react-native';
import Title from './../../components/Title/index';
export default Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Title value="Home Screen"></Title>
      <Button title="Login" onPress={()=> navigation.navigate('Login')}>
        

      </Button>
    </View>
  );
};

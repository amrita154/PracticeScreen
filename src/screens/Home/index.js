import React from 'react';
import {Text, View, Button} from 'react-native';
import Title from './../../components/Title/index';
import styles from './style';
export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title value="Home Screen"></Title>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}></Button>
    </View>
  );
};

import React from 'react';
import {Text, View, Button} from 'react-native';
import Title from './../../components/Title/index';
import styles from './style';
import navigateToScreen from '../../../utils/navigation/navigateToScreen';
export default ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title value="Forgot Password"></Title>
      <Button
        title="Login"
        onPress={() => navigateToScreen(navigation, 'Login')}></Button>
    </View>
  );
};

import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './style';
import navigateToScreen from '../../../utils/navigation/navigateToScreen';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title value="Sign Up"></Title>
      <Button
        title="Login"
        onPress={() => navigateToScreen(navigation, 'Login')}
      />
    </View>
  );
};
export default SignUp;

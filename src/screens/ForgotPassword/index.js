import React from 'react';
import {Text, View, Button} from 'react-native';
import Title from './../../components/Title/index';
import styles from './style';
import navigateToScreen from '../../../utils/navigation/navigateToScreen';
import LinearGradient from 'react-native-linear-gradient';
import GradientColors from '../../components/Gradient/index';
import {_ScrollView} from 'react-native';
export default ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={GradientColors()} style={styles.background}>
        <View style={styles.screenBody}>
          <Title value="Forgot Password"></Title>
          <Button
            title="Login"
            onPress={() => navigateToScreen(navigation, 'Login')}></Button>
        </View>
      </LinearGradient>
    </View>
  );
};

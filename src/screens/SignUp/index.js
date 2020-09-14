import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './style';
import navigateToScreen from '../../../utils/navigation/navigateToScreen';
import LinearGradient from 'react-native-linear-gradient';
import GradientColors from '../../components/Gradient';
import Title from './../../components/Title';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={GradientColors()} style={styles.background}>
        <View style={styles.screenBody}>
          <Title value="Sign Up"></Title>
          <Button
            title="Home"
            onPress={() => navigateToScreen(navigation, 'Home')}
          />
        </View>
      </LinearGradient>
    </View>
  );
};
export default SignUp;

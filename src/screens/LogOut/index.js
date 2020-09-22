import React, {useState, useEffect} from 'react';
import {View, AsyncStorage, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientColors from '../../components/Gradient';
import navigateToScreen from '../../../utils/navigation/navigateToScreen';
import Title from './../../components/Title';

function LogOut({navigation}) {
  const [email, setEmail] = useState('');
  useEffect(async () => {
    await AsyncStorage.getItem('username').then((value) => {
      setEmail(value);
    });
  }, []);
  const signOut = async () => {
    await AsyncStorage.removeItem('username');
    setEmail('');
    alert('Logged Out!!');
    navigateToScreen(navigation, 'LoginStack');
  };
  return (
    <LinearGradient
      colors={GradientColors()}
      style={{
        flex: 1,
      }}>
      <View>
        <Title value={'Welcome' + email} />
        <Button title="LogOut" onPress={signOut()} />
      </View>
    </LinearGradient>
  );
}

export default LogOut;

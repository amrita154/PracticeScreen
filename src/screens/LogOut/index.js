import React, {useState, useEffect, useContext} from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import GradientColors from '../../components/Gradient';
import navigateToScreen from '../../../utils/navigation/navigateToScreen';
import Title from './../../components/Title';
import {auth} from 'firebase';
import {AuthContext} from '../../components/Navigation/SwitchStack';

function LogOut({route, navigation}) {
  const [state, setstate] = useState(0);
  const {authcontext, username} = useContext(AuthContext);
  doSignOut = async () => {
    await AsyncStorage.removeItem('username').catch((error) =>
      console.log(error),
    );
    await authcontext.signOut();
  };
  return (
    <LinearGradient
      colors={GradientColors()}
      style={{
        flex: 1,
      }}>
      <View>
        <Title value={'Welcome ' + username} />
        <Button title="LogOut" onPress={() => doSignOut()} />
      </View>
    </LinearGradient>
  );
}

export default LogOut;

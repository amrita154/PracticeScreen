import React, {componentDidMount, useContext, useState} from 'react';
import {View, KeyboardAvoidingView, Platform, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Title from './../../components/Title';
import Input from './../../components/Input';
import TouchableText from './../../components/TouchableText';
import Styles from './style';
import validateInput from './../../../utils/validations/validateInput';
import navigateToScreen from './../../../utils/navigation/navigateToScreen';
import GradientColors from './../../components/Gradient';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../components/Navigation/SwitchStack';

function Login({navigation}) {
  const [state, setState] = useState({email: '', password: ''});
  const {authcontext} = useContext(AuthContext);
  const checkSignIn = async () => {
    canlogin = validateInput(state.email, state.password);
    if (canlogin) {
      await AsyncStorage.setItem('username', state.email).catch((error) =>
        console.log(error),
      );
      authcontext.signIn(state.email);
    }
  };
  return (
    <KeyboardAvoidingView
      style={Styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <LinearGradient colors={GradientColors()} style={{flex: 1}}>
        <View style={Styles.screenBody}>
          <Title value="Sign In" style={Styles.title} />
          <Input
            value="Login"
            style={Styles.textInput}
            defaultValue={state.email}
            onChangeText={(data) =>
              setState({
                email: data,
                password: state.password,
              })
            }></Input>
          <Input
            value="Password"
            secureTextEntry={true}
            style={Styles.textInput}
            onChangeText={(data) =>
              setState({
                email: state.email,
                password: data,
              })
            }
            defaultValue={state.password}
          />
          <TouchableText
            value="Sign In"
            styleButton={Styles.signInButton}
            styleText={Styles.signInText}
            onPress={checkSignIn}
          />

          <View style={Styles.otherOptions}>
            <TouchableText
              value="Forgot your Password ?"
              styleText={Styles.forgotPassword}
              onPress={() =>
                navigateToScreen(navigation, 'ForgotPassword')
              }></TouchableText>
            <TouchableText
              value="Sign Up"
              styleText={Styles.signUp}
              onPress={() =>
                navigateToScreen(navigation, 'SignUp')
              }></TouchableText>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

export default Login;

import React, {componentDidMount} from 'react';
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async signIn() {
    canlogin = validateInput(this.state.email, this.state.password);
    if (canlogin) {
      await AsyncStorage.setItem('username', this.state.email);
      alert('Logged In!!');
      navigateToScreen(this.props.navigation, 'AppStack');
    }
  }

  render() {
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
              defaultValue={this.state.email}
              onChangeText={(data) =>
                this.setState({
                  email: data,
                })
              }></Input>
            <Input
              value="Password"
              secureTextEntry={true}
              style={Styles.textInput}
              onChangeText={(data) =>
                this.setState({
                  password: data,
                })
              }
              defaultValue={this.state.password}
            />
            <TouchableText
              value="Sign In"
              styleButton={Styles.signInButton}
              styleText={Styles.signInText}
              onPress={() => this.signIn()}></TouchableText>

            <View style={Styles.otherOptions}>
              <TouchableText
                value="Forgot your Password ?"
                styleText={Styles.forgotPassword}
                onPress={() =>
                  navigateToScreen(this.props.navigation, 'ForgotPassword')
                }></TouchableText>
              <TouchableText
                value="Sign Up"
                styleText={Styles.signUp}
                onPress={() =>
                  navigateToScreen(this.props.navigation, 'SignUp')
                }></TouchableText>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;

import React from 'react';
import {Text, View, StyleSheet, Icon} from 'react-native';
import ScreenHeader from './../../components/Header';
import Title from './../../components/Title';
import Input from './../../components/Input';
import TouchableText from './../../components/TouchableText';
import Styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/Logo';
import validateInput from './../../../utils/validations/validateInput';
import navigateToScreen from './../../../utils/navigation/navigateToScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const headerComponents = {
      leftComponent: (
        <Logo
          onPress={() => navigateToScreen(this.props.navigation, 'Home')}
          source={require('./../../assets/Logo.png')}
          style={Styles.logoImage}></Logo>
      ),
      rightComponent: {text: 'Menu'},
    };
    return (
      <View style={Styles.container}>
        <LinearGradient
          colors={['#b4316e', '#8d3077', '#953876', '#392c7d']}
          style={{flex: 1}}>
          <ScreenHeader components={headerComponents} />
          <View style={Styles.screenBody}>
            <Title value="Sign In" style={Styles.title} />
            <Input
              value="Login"
              style={Styles.textInput}
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
            />
            <TouchableText
              value="Sign In"
              styleButton={Styles.signInButton}
              styleText={Styles.signInText}
              onPress={() =>
                validateInput(this.state.email, this.state.password)
              }></TouchableText>

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
      </View>
    );
  }
}

export default Login;

import React from 'react';
import {Text, View, StyleSheet, Icon} from 'react-native';
import ScreenHeader from './../../components/Header/index.js';
import Title from './../../components/Title/index';
import Input from './../../components/Input/index';
import TouchableText from './../../components/TouchableText/index';
import Styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../components/Logo/index.js';
import validateInput from './../../Validation/validateInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  
  render() {
    return (
      <View style={Styles.container}>
        <LinearGradient
          colors={['#b4316e', '#8d3077', '#953876', '#392c7d']}
          style={{flex: 1}}>
          <ScreenHeader
            leftComponent={
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('Home')}>
              <Logo
                source={require('./../../assets/Logo.png')}
                style={Styles.logoImage}></Logo>
                </TouchableOpacity>
            }
            rightComponent={{text:"Menu"}}
          />
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
              onPress={() => validateInput(this.state)}></TouchableText>

            <View style={Styles.otherOptions}>
              <TouchableText
                value="Forgot your Password ?"
                styleText={Styles.forgotPassword}
                onPress={()=>this.props.navigation.navigate('ForgotPassword')}></TouchableText>
              <TouchableText
                value="Sign Up"
                styleText={Styles.signUp}
                onPress={()=>this.props.navigation.navigate('SignUp')}></TouchableText>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default Login;

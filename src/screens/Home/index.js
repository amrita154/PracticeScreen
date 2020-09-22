import React from 'react';
import {View, ScrollView, TabBarIOS} from 'react-native';
import Title from './../../components/Title/index';
import styles from './style';
import navigateToScreen from './../../../utils/navigation/navigateToScreen';
import LinearGradient from 'react-native-linear-gradient';
import GradientColors from '../../components/Gradient/index';
import TouchableText from '../../components/TouchableText';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchMovie from '../SearchMovie';
import Login from '../login';
import SignUp from '../SignUp';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  onPressSearchButton(text) {
    if (text === 'Login') {
      alert('Login first to search');
      navigateToScreen(this.props.navigation, 'Login');
    } else {
      navigateToScreen(this.props.navigation, 'Movie');
    }
  }
  render() {
    loginValue = this.props.route.params.username;
    disabled = this.props.route.params.disabled;
    return (
      <View style={styles.container}>
        <LinearGradient colors={GradientColors()} style={styles.background}>
          <View style={styles.screenBody}>
            <Title value="Home"></Title>
            <View style={styles.options}>
              <TouchableText
                value={loginValue}
                disabled={disabled}
                styleButton={styles.button}
                styleText={styles.buttonText}
                onPress={() =>
                  navigateToScreen(this.props.navigation, 'Login')
                }></TouchableText>

              <TouchableText
                value="Signup"
                styleButton={styles.button}
                styleText={styles.buttonText}
                onPress={() =>
                  navigateToScreen(this.props.navigation, 'SignUp')
                }
              />
              <TouchableText
                value="Search Movie"
                styleButton={styles.button}
                styleText={styles.buttonText}
                onPress={() => this.onPressSearchButton(loginValue)}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default Home;

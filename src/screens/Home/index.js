import React, {getDerivedStateFromProps} from 'react';
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
import MovieCatalogue from '../../components/Movie/MovieCatalogue';
import AsyncStorage from '@react-native-community/async-storage';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingMovies: [],
      upcomingMovies: [],
      isLoaded: false,
      loginValue: this.props.route.params.username,
    };
  }
  async fetchData() {
    try {
      let response = await fetch(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=91dc96e74447b2ebe1268430803b91d6',
      );
      let json = await response.json();
      this.setState({
        trendingMovies: json.results,
      });
      response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=91dc96e74447b2ebe1268430803b91d6',
      );
      json = await response.json();
      this.setState({
        upcomingMovies: json.results,
      });
    } catch (error) {
      alert('Failed!!');
      console.log(error);
    }
  }
  componentDidMount() {
    this.fetchData();
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={GradientColors()} style={styles.background}>
          <ScrollView style={styles.container}>
            <View style={styles.screenBody}>
              <MovieCatalogue
                categoryValue="Trending Now"
                iconName="fire"
                isLoaded={this.state.isLoaded}
                movieList={this.state.trendingMovies}
                navigation={this.props.navigation}
              />
              <MovieCatalogue
                categoryValue="Upcoming"
                iconName="hourglass"
                isLoaded={this.state.isLoaded}
                movieList={this.state.upcomingMovies}
                navigation={this.props.navigation}
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

export default Home;

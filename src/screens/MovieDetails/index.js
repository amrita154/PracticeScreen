import React, {componentDidMount} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import GradientColors from './../../components/Gradient';
import Title from './../../components/Title';
import Logo from './../../components/Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import MovieInfoLists from '../../components/Movie/MovieInfo';

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      isLoaded: false,
      videos: [],
    };
  }
  componentDidMount = async () => {
    movieId = this.props.route.params.itemId;
    try {
      let response = await fetch(
        'https://api.themoviedb.org/3/movie/' +
          movieId +
          '?api_key=91dc96e74447b2ebe1268430803b91d6',
      );
      let json = await response.json();
      this.setState({
        movie: json,
        isLoaded: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <LinearGradient style={styles.background} colors={GradientColors()}>
        <ScrollView
          style={styles.background}
          contentContainerStyle={styles.contentContainerStyle}>
          {this.state.isLoaded ? (
            <View style={styles.background}>
              <Title value={this.state.movie.title}></Title>
              <View style={styles.movieDetails}>
                {this.state.movie.poster_path ? (
                  <Logo
                    source={{
                      uri:
                        'https://image.tmdb.org/t/p/w500/' +
                        this.state.movie.poster_path,
                    }}
                    style={styles.image}></Logo>
                ) : (
                  <Text style={{fontSize: 20, paddingTop: 30}}>
                    Image Not Available
                  </Text>
                )}
                <View style={styles.movieInfo}>
                  <MovieInfoLists
                    list={this.state.movie.production_companies}
                    style={styles.production_companies}
                    id={0}
                  />
                  <MovieInfoLists
                    list={this.state.movie.production_countries}
                    style={styles.moviesTextInfo}
                    id={1}
                  />
                  <MovieInfoLists
                    list={this.state.movie.spoken_languages}
                    style={styles.moviesTextInfo}
                    id={2}
                  />
                  <Text>{this.state.movie.release_date}</Text>
                  <MovieInfoLists
                    list={this.state.movie.genres}
                    style={styles.moviesTextInfo}
                    id={0}
                  />
                  <Text style={styles.moviePopularity}>
                    <Icon name="star" size={20}></Icon>
                    {parseInt(this.state.movie.popularity)}%
                  </Text>
                </View>
              </View>
              <Text style={styles.movieOverview}>
                {this.state.movie.overview}
              </Text>
            </View>
          ) : (
            <Title value="Loading"></Title>
          )}
        </ScrollView>
      </LinearGradient>
    );
  }
}

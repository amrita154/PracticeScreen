import React from 'react';
import {Text, View, Button} from 'react-native';
import Input from './../../components/Input';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import TouchableText from './../../components/TouchableText';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';
import navigateToScreen from './../../../utils/navigation/navigateToScreen';
import styles from './style';
import getMovies from './../../../utils/fetchData/getMovies';
import getSearchResult from './../../../utils/fetchData/getSearchResult';
import GradientColors from './../../components/Gradient';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../../components/Title';
import MoviesList from '../../components/Movie/MoviesList';
import SearchList from '../../components/Movie/SearchList';
class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      movies: [],
      searchedMovies: [],
      displaysearchedList: true,
    };
  }

  getMovies = async (data) => {
    newState = await getMovies(data);
    this.setState({
      searchText: newState.searchText,
      movies: newState.movies,
    });
  };
  onFocus = () => {
    this.setState({
      displaysearchedList: false,
    });
  };
  getSearchResult = async () => {
    newState = await getSearchResult(this.state.searchText);
    if (newState.searchedMovies.length > 0)
      this.setState({
        movies: newState.movies,
        searchedMovies: newState.searchedMovies,
        displaysearchedList: true,
      });
    else {
      this.setState({
        displaysearchedList: false,
      });
    }
  };

  render() {
    return (
      <LinearGradient colors={GradientColors()} style={{flex: 1}}>
        <View style={styles.container}>
          <Input
            value="Search a movie"
            style={styles.textInput}
            onChangeText={(data) => this.getMovies(data)}
            defaultValue={this.state.searchText}
            onFocus={() => this.onFocus()}></Input>
          <Button
            title="Search"
            onPress={() => this.getSearchResult()}></Button>

          {this.state.movies.length > 0 ? (
            <FlatList
              style={styles.list}
              data={this.state.movies}
              keyExtractor={({id}, index) => id.toString()}
              renderItem={({item}) => (
                <MoviesList
                  item={item}
                  styles={{
                    listBackground: styles.listBackground,
                    movieDate: styles.movieDate,
                    movieTitle: styles.movieTitle,
                  }}
                  onPress={() =>
                    this.setState({
                      searchText: item.title,
                      movies: [],
                      displaysearchedList: true,
                    })
                  }
                />
              )}
            />
          ) : (
            <Text></Text>
          )}

          {this.state.displaysearchedList && this.state.movies.length == 0 ? (
            <FlatList
              style={styles.movieList}
              contentContainerStyle={styles.movieContent}
              data={this.state.searchedMovies}
              keyExtractor={({id}, index) => id.toString()}
              renderItem={({item}) => (
                <SearchList
                  item={item}
                  styles={{
                    movieName: styles.movieName,
                    movieData: styles.movieData,
                    movieText: styles.movieText,
                  }}
                  navigation={this.props.navigation}></SearchList>
              )}></FlatList>
          ) : this.state.searchedMovies.length == 0 &&
            this.state.movies.length == 0 ? (
            <Title value="No Search Result!!"></Title>
          ) : (
            <Text></Text>
          )}
        </View>
      </LinearGradient>
    );
  }
}

export default SearchMovie;

import React from 'react';
import {View, Text, Button} from 'react-native';
import Title from '../Title';
import {ScrollView, FlatList, Image} from 'react-native-gesture-handler';
import MovieInfoLists from '../Movie/MovieInfo';
import Logo from '../Logo';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MovieCard from './MovieCard';
import styles from './style';

class MovieCatalogue extends React.Component {
  render() {
    const {
      categoryValue,
      iconName,
      isLoaded,
      movieList,
      navigation,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>
            {categoryValue + ' '}
            <Icon name={iconName} size={25} color="white" />
          </Text>
          <Button
            title="See All >"
            onPress={() =>
              navigation.navigate('MovieList', {
                movieList: {movieList},
                categoryValue: {categoryValue},
                iconName: {iconName},
              })
            }
          />
        </View>
        <View style={styles.container}>
          {isLoaded ? (
            <MovieCard
              horizontal={true}
              data={movieList}
              maxDisplay={10}
              navigation={navigation}
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    );
  }
}

export default MovieCatalogue;

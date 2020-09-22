import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientColors from '../../components/Gradient';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Logo from './../../components/Logo';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import navigateToScreen from '../../../utils/navigation/navigateToScreen';
import MovieCard from '../../components/Movie/MovieCard';
import styles from './style';

function MovieList({route, navigation}) {
  const {movieList, categoryValue, iconName} = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient colors={GradientColors()} style={styles.background}>
        <Text style={styles.categoryValue}>
          {categoryValue.categoryValue + ' '}
          <Icon name={iconName.iconName} size={25} color="white" />
        </Text>
        <MovieCard
          data={movieList.movieList}
          numColumns={2}
          maxDisplay={movieList.movieList.length}
          navigation={navigation}
        />
      </LinearGradient>
    </View>
  );
}

export default MovieList;

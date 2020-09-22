import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import navigateToScreen from './../../../utils/navigation/navigateToScreen';
import Logo from './../Logo';
import styles from './style';
function MovieCard({horizontal, data, maxDisplay, navigation, numColumns}) {
  return (
    <FlatList
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      data={data}
      numColumns={numColumns}
      keyExtractor={({id}, index) => id.toString()}
      renderItem={({item, index}) => {
        if (index < maxDisplay)
          return (
            <TouchableOpacity
              onPress={() =>
                navigateToScreen(navigation, 'MovieDetails', {
                  itemId: item.id,
                })
              }>
              <View style={styles.cardContainer}>
                <Logo
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
                  }}
                  style={styles.cardImage}></Logo>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDate}>{item.release_date}</Text>
              </View>
            </TouchableOpacity>
          );
      }}
    />
  );
}

export default MovieCard;

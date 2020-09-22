import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import navigateToScreen from './../../../utils/navigation/navigateToScreen';
import styles from './style';
SearchList = ({item, style, navigation}) => {
  return (
    <View style={style.movieData}>
      <TouchableOpacity
        onPress={() =>
          navigateToScreen(navigation, 'MovieDetails', {
            itemId: item.id,
          })
        }>
        <Text style={style.movieName}>{item.title}</Text>
        <Text style={style.movieText}>{item.release_date}</Text>
        <Text style={style.movieText}>
          {item.overview.substring(0, 100)}
          <Text style={styles.searchListText}>
            {item.overview.length > 101 ? '....Read more' : ''}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchList;

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import navigateToScreen from './../../../utils/navigation/navigateToScreen';
SearchList = ({item, styles, navigation}) => {
  return (
    <View style={styles.movieData}>
      <TouchableOpacity
        onPress={() =>
          navigateToScreen(navigation, 'MovieDetails', {
            itemId: item.id,
          })
        }>
        <Text style={styles.movieName}>{item.title}</Text>
        <Text style={styles.movieText}>{item.release_date}</Text>
        <Text style={styles.movieText}>
          {item.overview.substring(0, 100)}
          <Text
            style={{
              color: 'blue',
              opacity: 0.7,
            }}>
            {item.overview.length > 101 ? '....Read more' : ''}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchList;

import TouchableText from './../../components/TouchableText';
import {View, Text} from 'react-native';
import React from 'react';
MoviesList = ({item, onPress, styles}) => {
  return (
    <TouchableText
      styleButton={styles.listBackground}
      value={
        <View>
          <Text style={styles.movieTitle}>{item.title}</Text>
          <Text style={styles.movieDate}>{item.release_date}</Text>
        </View>
      }
      onPress={onPress}></TouchableText>
  );
};
export default MoviesList;

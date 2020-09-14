import React from 'react';
import {View, Text} from 'react-native';
MovieInfoLists = ({list, style, id}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {list.map((item, i) => {
        return (
          <Text
            key={id == 0 ? item.id : id == 1 ? item.iso_3166_1 : item.iso_639_1}
            style={style}>
            {item.name}
            {i < list.length - 1 ? '|' : ''}
          </Text>
        );
      })}
    </View>
  );
};
export default MovieInfoLists;

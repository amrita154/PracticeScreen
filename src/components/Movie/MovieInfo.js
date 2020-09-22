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
      {list.map((item, index) => {
        return (
          <Text key={index} style={style}>
            {item.name}
            {index < list.length - 1 ? '|' : ''}
          </Text>
        );
      })}
    </View>
  );
};
export default MovieInfoLists;

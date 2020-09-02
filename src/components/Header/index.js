import React from 'react';

import {View, Text, Icon, Image} from 'react-native';
import {Header} from 'react-native-elements';

ScreenHeader = ({leftComponent, rightComponent}) => {
  return (
    <View>
      <Header
        leftComponent={leftComponent}
        rightComponent={rightComponent}></Header>
    </View>
  );
};

export default ScreenHeader;

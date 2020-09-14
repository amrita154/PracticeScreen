import React from 'react';

import {View, Text, Icon, Image} from 'react-native';
import {Header} from 'react-native-elements';

const ScreenHeader = ({components}) => {
  return (
    <Header
      leftComponent={components.leftComponent}
      rightComponent={components.rightComponent}></Header>
  );
};

export default ScreenHeader;

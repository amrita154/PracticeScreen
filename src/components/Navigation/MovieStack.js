import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from './../../screens/MovieDetails';
import SearchMovie from './../../screens/SearchMovie';
import getHeaderTitle from '../Header/headerTitle';
import styles from './style';
import getHeaderLeft from '../Header/headerLeft';
import getHeaderRight from '../Header/headerRight';

const Stack = createStackNavigator();
const MovieStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitle: getHeaderTitle(route.name),
        headerStyle: styles.headerStyle,
        headerTintColor: '#EBF2FA',
        headerLeft: () => getHeaderLeft(navigation),
        headerRight: () => getHeaderRight(navigation),
      })}>
      <Stack.Screen name="SearchMovie" component={SearchMovie} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default MovieStack;

import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import getHeaderTitle from '../Header/headerTitle';
import styles from './style';
import getHeaderLeft from '../Header/headerLeft';
import getHeaderRight from '../Header/headerRight';
import MovieList from '../../screens/MovieList';
import MovieDetails from '../../screens/MovieDetails';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitle: getHeaderTitle(route.name),
        headerStyle: styles.headerStyle,
        headerTintColor: '#EBF2FA',
        headerRight: () => getHeaderRight(navigation),
      })}
      initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={({route, navigation}) => ({
          headerLeft: () => getHeaderLeft(route, navigation),
        })}
      />
      <Stack.Screen name="MovieList" component={MovieList} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;

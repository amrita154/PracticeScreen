import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    marginTop: 50,
  },
  movieDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  image: {
    height: 300,
    width: 200,
    opacity: 0.7,
    marginTop: 10,
  },
  movieInfo: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'flex-start',
  },
  moviePopularity: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieOverview: {
    fontSize: 25,
    padding: 10,
  },
  production_companies: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  moviesTextInfo: {
    fontSize: 16,
  },
});

export default styles;

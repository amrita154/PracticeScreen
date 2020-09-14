import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  list: {
    position: 'relative',
    zIndex: 10,
  },
  movieList: {
    flex: 1,
  },
  movieContent: {
    justifyContent: 'flex-start',
  },
  movieData: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginBottom: 10,
    padding: 20,
    alignItems: 'flex-start',
    opacity: 0.6,
  },
  movieTitle: {fontSize: 25, fontWeight: 'bold'},
  movieText: {fontSize: 20},
  textInput: {
    height: 60,
    fontSize: 25,
    marginTop: 20,
    backgroundColor: '#9c4b80',
    padding: 18,
  },
  movieName: {
    alignItems: 'flex-start',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  movieDate: {alignItems: 'flex-end', fontSize: 16},
  listBackground: {
    backgroundColor: 'gray',
    opacity: 0.3,
    padding: 10,
    width: 385,
  },
});

export default styles;

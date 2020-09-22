import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchListText: {
    color: 'blue',
    opacity: 0.7,
  },
  container: {
    flex: 1,
  },
  category: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  categoryTitle: {
    fontSize: 25,
    color: 'white',
  },
  cardContainer: {
    flex: 1,
    flexWrap: 'wrap',
    width: 210,
    padding: 15,
    height: 400,
    backgroundColor: 'transparent',
    opacity: 0.8,
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowColor: 'black',
  },
  cardImage: {
    height: 280,
    width: 180,
  },
  cardTitle: {
    color: 'black',
    fontSize: 20,
    marginTop: 5,
    color: 'white',
  },
  cardDate: {
    color: 'white',
  },
});
export default styles;

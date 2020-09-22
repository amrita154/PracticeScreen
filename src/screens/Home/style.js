import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenBody: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  background: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#be91b3',
    margin: 10,
    height: 50,
  },
  buttonText: {
    fontSize: 25,
    padding: 10,
    color: 'white',
  },
  options: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 10,
  },
});

export default styles;

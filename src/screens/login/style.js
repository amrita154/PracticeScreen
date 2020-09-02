import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#953876',
  },
  screenBody: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textInput: {
    height: 60,
    fontSize: 25,
    margin: 10,
    backgroundColor: '#9c4b80',
    padding: 18,
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#be91b3',
    width: '95%',
    height: 50,
    margin: 10,
  },
  signInText: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
  otherOptions: {
    flexDirection: 'row',
  },
  forgotPassword: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  signUp: {
    justifyContent: 'flex-end',
    paddingLeft: '33%',
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  title: {
    color: '#e8e2e7',
    marginBottom: 20,
  },
  logoImage: {
    height: 40,
    width: 40,
  },
});

export default Styles;

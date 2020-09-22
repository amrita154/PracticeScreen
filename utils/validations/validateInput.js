import navigateToScreen from '../navigation/navigateToScreen';

function alertMessage(message) {
  alert(message);
}
export default function validateInput(inputMail, inputPassword, navigation) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputMail === '' || mailformat.test(inputMail) === false) {
    alertMessage('Please provide valid email');
  } else if (inputPassword === '') {
    alertMessage('Please provide valid password');
  } else if (inputPassword.length < 8) {
    alertMessage('Weak Password!!Password should be of length more than 8');
  } else if (!inputPassword.match(/[a-z]/g)) {
    alertMessage('Password should contain atleast one lowercase letter');
  } else if (!inputPassword.match(/[A-Z]/g)) {
    alertMessage('Password should contain atleast one uppercase letter');
  } else if (!inputPassword.match(/[0-9]/g)) {
    alertMessage('Password should contain atleast one digit');
  } else {
    return true;
  }
  return false;
}

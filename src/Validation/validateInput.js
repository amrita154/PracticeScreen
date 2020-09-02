export default function validateInput(inputMail, inputPassword) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputMail == '' || mailformat.test(inputMail) == false) {
    alert('Please provide valid email');
  } else if (inputPassword == '') {
    alert('Please provide valid password');
  } else {
    alert('Welcome ' + inputMail);
  }
}

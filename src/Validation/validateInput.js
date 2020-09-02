export default function validateInput({InputMail, InputPassword}) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (InputMail == '' || mailformat.test(InputMail) == false) {
    alert('Please provide valid email');
  } else if (InputPassword == '') {
    alert('Please provide valid password');
  } else {
    alert('Welcome ' + InputMail);
  }
}

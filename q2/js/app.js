<script>
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
</script>

function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Please enter a valid email address.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email address.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateUsername() {
  var username = document.getElementById("username").value;

  if (username == '') {
    alert("Empty username.");

    return false;
  }

  else if (username.length < 8 {
    alert("Please enter a valid username. Must be greater than 8 characters.")

    return false;
  }

  else if (username.length > 24) {
    alert("Please enter a valid username. Must be less than 24 characters.")

    return false;
  }

  else if (username.indexOf(' ') >= 0){
    alert("Please enter a valid username. Cannot have spaces.")

    return false;
  }

  else if (!isNaN(username.charAt(0))){
    alert("Please enter a valid username. First character cannot be a number.")

    return false;
  }

  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;

  if (password == '') {
    alert("Empty password.");

    return false;
  }

  else if (password.length < 8 {
    alert("Please enter a valid password. Must be greater than 8 characters.")

    return false;
  }

  else if (password.length > 24) {
    alert("Please enter a valid password. Must be less than 24 characters.")

    return false;
  }

  else if (password.indexOf(' ') >= 0){
    alert("Please enter a valid password. Cannot have spaces.")

    return false;
  }

  else if (!isNaN(password.charAt(0))){
    alert("Please enter a valid password. First character cannot be a number.")

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var username = document.getElementById("password")
  var error = document.getElementById("username-error");
  if (username.value == "") {
    error.innerHTML = "username is required.";
    error.style.color = 'red';

    setTimeout(() => {
      error.innerHTML = '';
    }, 700)
  }
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var username = document.getElementById("password")
  var error = document.getElementById("password-error");
  if (username.value == "") {
    error.innerHTML = "password is required.";
    error.style.color = 'red';

    setTimeout(() => {
      error.innerHTML = '';
    }, 700)
  }
});
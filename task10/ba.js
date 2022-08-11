

document.getElementById('submit').onclick = function () {
  var username = document.getElementById('name').value;
  var usermail = document.getElementById('email').value;

  console.log('username: ' + username);
  console.log('email: ' + usermail);

  localStorage.setItem('name', username);
  localStorage.setItem('email', usermail);
};

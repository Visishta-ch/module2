var username = document.getElementById('name').value.trim();
var usermail = document.getElementById('email').value.trim();

var userList = document.getElementById('users');
var DetailsObj = {
  name: username,
  email: usermail,
};
//var lsContent = JSON.parse(localStorage.getItem('DetailsObj') || "[]");
document.getElementById('my-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var username = document.getElementById('name').value.trim();
  var usermail = document.getElementById('email').value.trim();
  var userList = JSON.parse(localStorage.getItem('userList') || '[]');

  var userDetail = {
    name: username,
    email: usermail,
  };
  userList.push(userDetail);
  localStorage.setItem('userList', JSON.stringify(userList));

  var fetchObj = JSON.parse(
    localStorage.getItem('userList', JSON.stringify(userList))
  );

  console.log(fetchObj);
  displayList();
  document.getElementById('my-form').reset();
  document.getElementById('name').focus();
});
var fetchObj = JSON.parse(
  localStorage.getItem('DetailsObj', JSON.stringify(DetailsObj))
);
console.log(fetchObj);

function displayList(e) {
  /*creating list node*/
  var newUser = document.getElementById('name').value;
  var newemail = document.getElementById('email').value;
  var li = document.createElement('li');
  li.className = 'user-list';
  li.appendChild(document.createTextNode(newUser));
  li.appendChild(document.createTextNode( " "));
  li.appendChild(document.createTextNode(newemail));
  userList.appendChild(li);
/*Adding Edit button */
  var editBtn = document.createElement('button');
  editBtn.className = 'btn-edit';
  editBtn.appendChild(document.createTextNode('EDIT'));
  
  li.appendChild(editBtn);
  

  /*Adding delete button*/
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn-delete';
  deleteBtn.appendChild(document.createTextNode('DELETE'));
  li.appendChild(deleteBtn);
}



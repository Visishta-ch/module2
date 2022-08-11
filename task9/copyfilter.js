var itemList = document.getElementById('items');
var form = document.getElementById('addForm');
var details = document.getElementById('description');

form.addEventListener('submit', addItem);
//adding item
function addItem(e) {
  e.preventDefault();

  //get input
  var newItem = document.getElementById('item').value;
  console.log(newItem);
  var li = document.createElement('li');
  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));
  //get description
  var description = document.getElementById('description').value;
  console.log(description);

  var res = document.createElement('div');
  res.className = 'fw-bold text-left';
  var resTxt = document.createTextNode(details.value);
  //add text to div
  res.appendChild(resTxt);

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-success btn-sm float-right';
  editBtn.appendChild(document.createTextNode('EDIT'));
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  li.appendChild(res);
  itemList.appendChild(li);
}
// Delete event
itemList.addEventListener('click', removeItem);
// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//adding filters

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filerItems);

function filerItems(e) {
  //convert input text ot lowercase
  var txt = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');

  //convert the html collections to array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    var det = item.lastElementChild.innerHTML;
    if (
      (itemName.toLowerCase().includes(txt) &&
        det.toLowerCase().includes(txt)) ||
         txt.includes(det.toLowerCase())
    ) {
      item.style.display = 'block';
    } else item.style.display = 'none';
  });
}

//console.log(document);

console.log(document.domain);
console.log(document.head);
console.log(document.title);
console.log(document.body);

console.log(document.links);
document.title = "docs";
//chaning title of page
var h2 = document.getElementById('title');
h2.style.color = 'green';
h2.style.fontWeight='bold';

document.getElementById('header-title').textContent = 'Hello';
//document.all is not supported


var header = document.getElementById('main-header');
var htitle = document.getElementById('header-title');
console.log('htitle');
htitle.innerText ='Hi Everyone';

htitle.innerHTML = '<h2>Hello</h2>';

header.style.borderBottom = 'solid 3px #000';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i =0;i<odd.length;i++){
    odd[i].style.backgroundColor = "#f4f4f4";
    even[i].style.backgroundColor = "#ccc";
}

var newli = document.createElement('li');
newli.className = 'list-group-item';
newli.appendChild(document.createTextNode('Item5'));

var ul = document.getElementById('items');
ul.appendChild(newli);

var inputBox = document.createElement('input')
inputBox.type = 'text';
inputBox.className = "form-control mr-2";
//inputBox.appendChild(document.createTextNode('Description'));
var f = document.getElementById('form-id');
f.appendChild(inputBox);
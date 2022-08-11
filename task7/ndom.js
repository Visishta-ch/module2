//traversing the Dom
var dec = document.getElementById('main-header');
dec.style.borderBottom = '2px solid #C70039';
var itemList = document.querySelector('#items');
/*parentNode*/
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode)

// /*parentElement*/
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement
//     );

// /*childNodes*/

// console.log(itemList.childNodes); //also works with line breaks and comments
//                                 //gives the text nodes in between if line breaks are present

// console.log(itemList.children); // just gives list items  present in html collections
//                                 //not in node list

// /*access specifi children */
// console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'pink';

var list = document.querySelector('#items');
/*firstchild */
console.log(list.firstChild);

/*first element child */
console.log(list.firstElementChild); //gives list
list.firstElementChild.textContent = 'Add item 1';

/*lastChild*/

console.log(list.lastChild);//text node

/*last Element child*/
console.log(list.lastElementChild);
list.lastElementChild.textContent = 'Add item 5'

/*nextSibling */
console.log(list.nextSibling);//text node
/*nextElementSibling */
console.log(list.nextElementSibling);

/*previous sibling */
console.log(list.previousSibling);//text node
/*previousElementSibling*/
console.log(list.previousElementSibling);
list.previousElementSibling.style.color='navy';


/*Creating DOM elements using js ----
    using creatElement() method----*/

//creating a div

var newDiv = document.createElement('div');
//adding class
newDiv.className = 'hello';
//add attribute
newDiv.setAttribute('title','Hello div');

//create text nodes
var newDivText = document.createTextNode('Hello World');
//add text to div 
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '20px';
container.insertBefore(newDiv,h1);
console.log(newDiv);

/*Creating a node before itemLister */
var subDiv = document.createElement('div');
subDiv.className = 'HEllo';
subDiv.setAttribute('title','sub-Div');
var subDivText = document.createTextNode('HEllo');
subDiv.appendChild(subDivText);
var container1 = document.querySelector('header .container');
var h11 = document.querySelector('header h1');
container1.insertBefore(subDiv,h1);
console.log(subDiv);


/*creating a node befor item1 */
var newli = document.createElement('div');
newli.className = 'hellolist';
newli.setAttribute('title','newli');
var newliText = document.createTextNode('HEllo');
newli.appendChild(newliText);
var cnt = document.querySelector('body .list-group');
var text = document.querySelector('body items');

cnt.insertBefore(newli,text);


var newitem = document.createElement('li');
newitem.className = 'hello';
var itemText = document.createTextNode('HEllo');
newitem.appendChild(itemText);
var loc = document.getElementById('items');
//var txt = document.querySelector('ul list-group');
loc.insertBefore(newitem,loc.children[0]);







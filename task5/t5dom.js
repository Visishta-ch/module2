//getElementByTagName

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent ='add item 2';
li[1].style.backgroundColor='yellow';
li[1].style.fontWeight='bold';
/**we can access item5 using tagname <li>*/
for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = 'gray';
    li[i].style.color='white';
    li[i].style.fontWeight='bold';
}
/*We cannot access the 5th item as it does have the class name 
and so the following changes are made till item4 and are over ridden
but not on 5th item */
var Listitems = document.getElementsByClassName('list-group-item');
for(var i=0;i<Listitems.length;i++){
    Listitems[i].style.backgroundColor = "pink";
    Listitems[i].style.color = 'navy';
}

//queryselector

var header = document.querySelector('#main-header');
header.style.borderBottom = '1px solid red';
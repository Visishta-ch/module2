//getElementByClassName

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'add item 2';
items[1].style.fontWeight='bold';
//items[1].style.backgroundColor = 'yellow';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor = 'pink'
}

for(var i=0;i<items.length-1;i++){
    items[i].style.fontWeight = 'bold';
}

items[3].style.backgroundColor = 'green';

items[3].style.color='white';
items[3].style.fontWeight = 'bold';


//QuerySelector

var header = document.querySelector('#main-header');
header.style.borderBottom = '3px solid red';

var input = document.querySelector('input');
input.value ='add no. of items';

var seconditem = document.querySelector('.list-group-item:nth-child(2) ');
seconditem.style.backgroundColor = 'green';
seconditem.style.color='white';

var thirditem = document.querySelector('.list-group-item:nth-child(3) ');
thirditem.style.visibility = 'hidden';


//QuerySelectorAll
// var titles = document.querySelectorAll('.title');
// titles[0].textContent='Hello';

// var item2 = document.querySelectorAll('#items li')[1];
// item2.style.color = 'green';
// item2.style.fontWeight ='bold';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
//     odd[i].style.color='white';
// }
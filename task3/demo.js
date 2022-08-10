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


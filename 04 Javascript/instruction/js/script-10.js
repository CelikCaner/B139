//querySelector() selects the first element it matches
const headEl = document.querySelector('h1');
console.log(headEl);

const aboutUsEl = document.querySelector('#aboutUs');
console.log(aboutUsEl);

const spanEl = document.querySelector('#aboutUs span');
console.log(spanEl);

//querySelector() works with CSS selectors
const menuItem3El = document.querySelector('ul.menu li:nth-child(3)');
console.log(menuItem3El);

headEl.innerText = "hello Js, no longer 'dommy'";

//querySelectorAll() selects all the elements it matches
const spanEls = document.querySelectorAll('#aboutUs span');
console.log(spanEls);

spanEls[0].innerText = 'HELLOOOO';

//this code chose the 2nd list element and added it to the end of the last list element
const listItemText = document.querySelector('.menu li:nth-child(2)').innerText;
console.log(listItemText);
document.querySelector('.menu li:last-child').innerText += listItemText;

//this code chooses the 4th list element and changes it with a bold 'hello'
const listItem4El = document.querySelector('.menu li:nth-child(4)');
listItem4El.innerHTML = '<b>hello</b>';

//classList chooses the classes of the element
const pageTitleEl = document.querySelector('#pageTitle');
console.log(pageTitleEl.classList);
pageTitleEl.classList.add('title'); //with add method we can add it a new class

const aboutUs2 = document.querySelector('#aboutUs');
aboutUs2.classList.add('bg-blue');

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

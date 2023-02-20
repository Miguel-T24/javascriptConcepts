// let element;
// element = document;
// element = document.head;
// element = document.title;

// console.log(element);


// console.log(window);

// let element = document.querySelector('h2');
// console.log(element);

// let elementStyle = document.styleSheets
// console.log(elementStyle);

// // how many links have my document
// console.log(document.links);



const element = document.getElementById("t-course");
console.log(element);
const element1 = document.getElementById("message");
console.log(element1);


const element2 = document.getElementsByClassName("list");
console.log(element2);


// How many child have this element
console.log(`Amount of child of this element`);
const element3 = document.querySelector("ul");
console.log(element3.childElementCount);

// get array colection of the children
console.log(`List of child if this elements`);
const element4 = document.querySelector("ul");
console.log(element4.children);


// if we have work with one of this child
console.log(`Work with one of this child, for example in the 1 position`);
console.log(element4.children[1]);

console.log(`first child`);
console.log(element4.firstElementChild);

console.log(`Las element child`);
console.log(element4.lastElementChild);

console.log(`GrandFather`);
const GrandFather = document.querySelector('ul.course-list > li.list')

console.log(GrandFather.parentElement.parentElement);

const brothers = document.querySelector("ul.course-list > li.list");
console.log(brothers.nextElementSibling);
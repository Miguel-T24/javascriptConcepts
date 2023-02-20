'use strict'

const newElement = document.createElement("a");
console.log(newElement);

newElement.className = 'newClass';
newElement.id = "newId";
// newElement.setAttribute('href', 'https://youtube.com')
newElement.href = "https://youtube.com"
newElement.textContent = "New Element"; 
newElement.target = "_blanck"

const refNode = document.querySelector('div');

refNode.appendChild(newElement);
'use strict'

// childen: All Elements
// childnodes: all child nodes

const father = document.getElementById("father");
console.log(father.children);
console.log(father.childNodes);

// firschild
// firtElementChild
console.log(father.firstChild);
console.log(father.lastChild);
console.log(father.lastElementChild);

// NextSibling
// NextElementSibling
const grandchild2 = document.getElementById("grandC2")
console.log(grandchild2);
console.log(grandchild2.nextSibling);
console.log(grandchild2.nextElementSibling);

// previusSibling
// previusElementSibling
console.log(grandchild2.previousSibling);
console.log(grandchild2.previousElementSibling);

// parent element
console.log(grandchild2.parentElement);
console.log(grandchild2.parentElement.parentElement);
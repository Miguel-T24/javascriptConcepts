'use strict'

// Remove Child
const deleteNode = document.querySelector("div>p");
const father = document.querySelector(".container");
father.removeChild(deleteNode);

// Second Method to remove
const secMethod = document.getElementById("sec-method");
secMethod.remove();

// Replace Child
const father2 = document.getElementById("father");
const toReplace = document.getElementById("ToReplace");
const newNode = document.createElement("h2");
newNode.textContent = "Element Replaced";

father2.replaceChild(newNode,toReplace)
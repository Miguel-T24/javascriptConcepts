'use strict'

// getting father node
const father  = document.getElementById('father');
// creating new node
const newNode = document.createElement("h2");
// creating text to node
const text = document.createTextNode("Some text");


// add text to new node 
newNode.appendChild(text)
// add new node to father
father.appendChild(newNode);

// note: Appendchild only add new nodes in the final of father node.

// We can add several nodes with append



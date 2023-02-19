'use strict'

// Using Append to add elements consecutive
father.append('Some text part 2', document.createElement('p'), document.createElement('h3'));

// Insert Before
// We need node new node and node final
// node final is the next node
const otherNewNode = document.createElement("h2");
const final = document.querySelector("div>h2");
const text1 = document.createTextNode("Insert Before Prove");
otherNewNode.appendChild(text1);
father.insertBefore(otherNewNode, final);


// Insert adjacent element

// Before Begin
const nodeBeforeBegin = document.createElement("p");
const textBeforeBegin = document.createTextNode("Before Begin");
nodeBeforeBegin.appendChild(textBeforeBegin);
father.insertAdjacentElement('beforebegin', nodeBeforeBegin);

// After Begin
const nodeAfterBegin = document.createElement('p');
const textAfterBegin = document.createTextNode("After Begin Prove");
nodeAfterBegin.appendChild(textAfterBegin);
father.insertAdjacentElement('afterbegin', nodeAfterBegin);

// Before End
const nodeBeforeEnd = document.createElement('p');
const textBeforeEnd  = document.createTextNode("Before End")
nodeBeforeEnd.appendChild(textBeforeEnd);

father.insertAdjacentElement("beforeend", nodeBeforeEnd);

// After end
const nodeAfterEnd = document.createElement("p");
const textAfterEnd = document.createTextNode("After End");
nodeAfterEnd.appendChild(textAfterEnd);

father.insertAdjacentElement("afterend", nodeAfterEnd);
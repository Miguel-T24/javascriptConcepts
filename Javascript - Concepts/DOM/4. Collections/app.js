'use strict'

// Node List (is not arrays)
console.log(`NODE LIST`);
const nodeList = document.querySelectorAll("img");
console.log(nodeList);
console.log(nodeList.length);
console.log(nodeList.map); // it don't work


// HTML Collection
console.log(`\n\nHTML COLLECTION`);
const collection = document.getElementsByTagName ("h1");
console.log(collection);
console.log(collection.length);
console.log(collection.map); // it don't work

// almost all time, we will use node list

// Convert to array
console.log(`\n\nConvert to array`);

// Firt Way
const array = [...nodeList]
console.log(array);
console.log(array.length);
console.log(array.map);

// Way 2
const array2 = Array.from(document.querySelectorAll("img"))
console.log(array2);
console.log(array2.length);
console.log(array2.map);
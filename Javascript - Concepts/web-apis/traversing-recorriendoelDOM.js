'use strict'

// Enfocado a los elementos (a las etiquetas html como tal)

const $cards = document.querySelector(".cards");
console.log($cards);

console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild); 
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("section"));//Padre mas cercano del tipo de elementos que especifiquemos
console.log($cards.children[3].closest("section"));
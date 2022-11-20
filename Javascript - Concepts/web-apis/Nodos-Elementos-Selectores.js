'use strict'

// Estos casi no se usan
//*****************************************************************************************
// tags etiquetas, elementos
// Nos devulve una colleccion html que e sparecido a un arreglo pero no es una arreglo
console.log(document.getElementsByTagName("li"));
// Clase
console.log(document.getElementsByClassName("card"));
// Atributo name, devuelve un tipo d e dato nodelist
console.log(document.getElementsByName("nombre"));
//*****************************************************************************************


// por id
console.log(document.getElementById("menu"));

// Query selector devuelve cualquier elemento, ids, enlaces, clases
console.log(document.querySelector("#menu"));
// y solo trae el primer selector que encuentra
console.log(document.querySelector("a"));
// Si deseo traer todos, uso querySelectorAll y devuelve una nodelist de javascript
console.log(document.querySelectorAll("a"));

// Recorrer los elementos con querySelectorAll
document.querySelectorAll("a").forEach((el) => console.log(el));

// acceder a la posicion de un elemento con query selector
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);

// los elementos que esten dentro del un id
console.log(document.querySelectorAll("#menu li"));
'use strict'

// Como interactuar con los atributos html
// html5 nos permite crear nuevos atributos
// La unica obligacion para crear atributos es colocar un data y un guion y luego el nombre dle atributo: data-description = "Document Object MOdel"

// Acceder a valores
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href); //trae la url completa
console.log(document.querySelector(".link-dom").getAttribute("href")); //Solamente trae el valor que la direccion

// Cambio del lenguaje, en la etiqueta lang
document.documentElement.lang = "en";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX");;
console.log(document.documentElement.lang);

// Podemos guardar la seleccion de un atributo en una constante y luego trabajarla
const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target" , "_blank");
$linkDOM.setAttribute("rel" , "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

// Remover un atributo
console.log($linkDOM.hasAttribute("rel")); // true 
$linkDOM.removeAttribute("rel"); //se removio
console.log($linkDOM.hasAttribute("rel")); //false


// Data-Atribute 
console.log($linkDOM.getAttribute("data-description"));
// Cada atributo lo guarda en la propiedad de una variable tipo mapa
console.log($linkDOM.setAttribute("data-id" , 1));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description" , "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal y Comparte!!"
console.log($linkDOM.dataset.description);
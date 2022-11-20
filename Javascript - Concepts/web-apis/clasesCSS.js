'use strict'

const $card =document.querySelector(".card");
console.log($card);

// Agregar y quitar clases
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

// toggle - Interruptor
// Si el elemento tiene la clase se la quita pero si no la tiene se la agrega
$card.classList.toggle("rotate-45") //En este caso al agrega
console.log($card.classList.contains("rotate-45"));// true
$card.classList.toggle("rotate-45"); //En este caso se la quita
console.log($card.classList.contains("rotate-45"));// false

// Una clase tengo que reemplazarla con otra
// Primero la gira para que tenga la rotacion
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));//true
// Reemplazo la rotacion
$card.classList.replace("rotate-45", "rotate-135");
console.log("Contiene rotate-45? - "+ $card.classList.contains("rotate-45")); //false
console.log("Contiene rotate-135? - "+ $card.classList.contains("rotate-135")); //true

// Agregar clases
$card.classList.add("opacity-80", "sepia");
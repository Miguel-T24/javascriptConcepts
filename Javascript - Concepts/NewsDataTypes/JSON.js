'use strict'

// Esto es un objeto Javascript
 const json = {
    cadena: "Jon",
    numero: 34,
    booleano:true,
    arreglo: ["correr","Programar","Cocinar"],
    objeto: {
        twitter: "@jonMircha",
        email:"JonMircha@gmail.com"
    },
    nulo: null
 }

console.log(json);

// JSON.parse() detecta el tipo de dato aunque esté entre comillas
// En este caso podremos {} [] true. Estos datos los coloco entre comillas y la consola lo muestra como string.
console.log("{}");
console.log("[]");
console.log("true");
console.log("19");
console.log("null");

// Pero si usamos el JSON.parse() lo cambia automaticamente a su tipo de dato correspondiente
console.log(`JSON.parse() Conviertiendo a su tipo de dato`);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
 

// JSON.strigify() hace lo contrario a JSON.parse(), toma el tipo de daot y lo convierte a cadena de texto
console.log(`JSON.stringify() Convirtinedo el tipo de dato a cadena de texto`);
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));
// En este caso convierte un objeto a notacion JSON
console.log(`En este caso convierte un objeto a notacion JSON`);
console.log(JSON.stringify({name: "Jon" , apellido: "Mircha"}));
 
// Parse:  convertira un string que tenga un formato valido de JSON y lo convierte a una objeto de javascript

// stringify: convierte de un objeto de javascript a JSON.
'use strict'

// Tipo de dato primitivo
// Su valor se mantendra en privado y para uso interno

let id = Symbol("id");
let id2 = Symbol("id2"); 

console.log(id === id2); //False, porque son unicos
console.log(id,id2); // symbol(id) symbol(id2)
console.log(typeof id , typeof id2); //tipo symbol
// Sirve para crear propiedades privadas de los objetos
// Sirve para evitar colisiones entre propiedades

// Para buena practica se debe escribir como constantes

// los string dentor de los parametros symbol solo son una referencia
const NOMBRE = Symbol("Nombre");
const SALUDAR = Symbol("Saludar");

const persona = {
    [NOMBRE]: "Miguel",
    edad: 26
}

console.log(persona);

persona.NOMBRE = "Jon Mircha"

console.log(persona);
console.log(persona[NOMBRE]);
console.log(persona.NOMBRE); 

persona[SALUDAR] = function(){
    console.log("Hola");
}

console.log(persona);

// Para ejecura una funciond e tipo symbol
persona[SALUDAR]();


for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}

console.log(Object.getOwnPropertySymbols(persona));
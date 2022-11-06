'use strict'

// let {nombre, apellido, edad} = props

let numeros = [1,2,3];

// sin usar la destructuracion
let uno  = numeros[0],
    dos = numeros [1],
    tres = numeros[2];

console.log(uno, dos, tres);


// Usando la destructuracion
const [one, two, three] = numeros;
console.log(one, two, three);


// Con un objeto
let persona = {
    nombre: "jon",
    apellido: "Mircha",
    edad: 35
}

let {nombre, apellido, age} = persona;
console.log(nombre, apellido, age); //age: se debe llamar igual dentro del objeto como ya destructurado, por este motivo de esta forma no funciona.
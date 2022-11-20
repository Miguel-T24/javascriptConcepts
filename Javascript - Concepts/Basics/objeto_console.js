'use strict'

console.log(console);
console.error("Esto es un Error");
console.warn("Esto es un warning");
console.info("Esto es un mensaje informativo");
console.log(`Esto es un registro de lo que ha pasado en nuestra aplicacion`);

let nombre = "jon",
apellido = "Mircha",
edad = 35;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);

console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años de edad`);

console.log(`hola mi nombre es %s %s y tengo %s años de edad`, nombre, apellido, edad);

// console.clear();

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

// console.clear();

// Para hacer un colapse
console.group("Cursos de @jonmircha en youtube");
console.log(`Curso de Javascript`);
console.log(`Curso de CSS`);
console.log(`Curso de PWA`);
console.log(`Mino Serie de FlexBox`);
console.log(`Diseño y programacion web`);
console.groupEnd();

// Tablas
console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5],
vocales = ['a','e','i','o','u'];

console.table(numeros);
console.table(vocales);


const perro = {
    nombre: "Boni",
    raza: "Boxer",
    color: "Cafe"
}

console.table(perro);


console.clear();

// console.time(`Cuanto tiempo tarda mi codigo`);
// const arreglo = Array(1000000);
// for(let i = 0 ; i < arreglo.length; i++){
//     arreglo[i] = i;
// }
// console.timeEnd("Cuanto tiempo tarda mi codigo");
// console.log(arreglo);

// for(let i = 0 ; i < 100; i++){
//     console.count("Codigo For");
//     console.log(i);
// }

let x = 3 , y = 2 , pruebaxy = "Se espera que x siempre sea menor que Y";

console.assert(x<y, {x,y,pruebaxy});
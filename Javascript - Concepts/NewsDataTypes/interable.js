'use strict'

// Una estructura de datos iterables es una estructura de datos lineal que hace que sus elementos sean publicos y se puedan recorrer

// Iterable: elemento que se quiere recorrer
// Iterador: el apuntador a ese iterable

const iterable = [1,2,3,4,5];

// Accedemos al iterador de del iterable
const iterador = iterable[Symbol.iterator]();


console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();
while(!next.done){
    console.log(next.value);
    next = iterador.next();
}
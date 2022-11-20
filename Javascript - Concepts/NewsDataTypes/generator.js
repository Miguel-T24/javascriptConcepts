'use strict'

// Un generador es convertir el codigo de una funcion en iterable

// Para que javascript separ que va a ser una variable tipo generador le agregamos aterisco al lado de function

// Esto es un generador
function* iterable(){
    yield "hola";
    console.log(`Hola consola`);
    yield "hola 2";
    console.log(`Seguimos con mas instrucciones de nuestro codigo`);;
    yield "Hola 3";
    yield "hola 4";    
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());


for (let i of iterador){
    console.log(i);
}

// Guardar en un arreglo una funcion generadora

const arr = [...iterable()];
console.log(arr);


function cuadrado(value){
    setTimeout(() => {
        return console.log({value, resultado : value * value});
    }, Math.random() * 1000);
}

function* generador(){
    console.log(`Inicia Generator`);
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("termina generator");
}

let gen = generador();
for(let i of gen){
    console.log(i);
}
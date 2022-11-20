'use strict'

// const saludar = function(){
//     console.log(`Hola Mundo!`);
// }

// const saludar = () =>{
//     console.log(`Hola Mundo!`);
// } 

// cuando es una sola linea se puede colocar en una sola linea
// y cuando tiene un solo argumento podemos colocar el argumento sin parentesis
// const saludar = () => console.log(`Hola mundo!`);
// saludar();
const saludar = nombre => console.log(`Hola ${nombre}`)
saludar("Miguel");

// Tenerlo en una sola linea conlleva a que tenga un return implicito
// const sumar = (a,b) => {
//     return a + b;
// }
// console.log(sumar(8,9));

const sumar = (a,b) => a + b
console.log(sumar(9,9));

const funcionDeVariasLineas = () => {
    console.log(`Uno`);
    console.log(`Dos`);
    console.log(`Tres`);
}

funcionDeVariasLineas();


const numeros = [1,2,3,4,5];

numeros.forEach((el, index) => console.log(`El elemento ${el} es en la posicion ${index}`));

// function perro(){
//     console.log(this);
// }
// perro();


// Cuando utilizas una funcion declarada, la funcion recnoce solo el contexto o el ambito en la que se encuentra

// Mientras que una funcion flecha te reconce el ambito global
// Los siguiente es una mala practica
const perro = {
    nombre: "Kenai",
    ladrar: () => {
        console.log(this);
    }
}   
perro.ladrar();
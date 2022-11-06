'use strict'
// Valores de tipos compuestos o complejos

// Funciones
// Las funciones tambien se consideran objetos

// Hay dos tipos de funciones: Funciones Declaradas y Funciones Expresadas

// Funcion Declarada
function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
estoEsUnaFuncion();


function unaFuncionQueDevuelveValor(){
    console.log(`Antes del Return`);
    return "La Funcion ha retornado una cadena de texto"; // Las funciones se ejecutan hasta el return
    console.log(`Despues del Return`);
}
let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(`${valorDeFuncion}`);


// Funcion que recibe parametros
function saludar(nombre = "Desconocido", edad = 0){
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Miguel", 26);
saludar();

// Probando que en cualquier lugar se puede declarar una funcion
funcionDeclarada();
function funcionDeclarada(){
    console.log(`Esta es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada`);
}
funcionDeclarada();



// Funciones expresadas
// Asignarsela a una variable

// Funcion anonima
// funcionExpresada();
const funcionExpresada = function (){
    console.log(`Esto es una funcion expresada, es decir una funcion que se le ha asignado el valor a una variable, si invocamos esta funcion antes de su definicion JS nos dirá (Cannot access functionExpresada before initialization)`);
}
funcionExpresada();
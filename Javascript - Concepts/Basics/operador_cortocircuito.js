'use strict'

/*
Cortocircuito OR - Cuando el valor de la izquierda en una expresion siempre peuda validar a true, es el valor que se cargara por defecto

Cortocircuito con AND - cuando el valor de la izquierda en la expresion siempre pueda validad a false, es el valor que se cargara por defecto
*/


// recordando los trutly, valores que tienden a true o false
console.log(`Cadena` || "Valor de la derecha");
console.log(false || "Valor de la derecha");


// Cuando no existian las asignaciones a funciones por defecto en una funcion,e sta era la forma de colocar un valor por defecto.

function saludar(nombre){
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}

saludar("Miguel");
saludar();

// con AND es lo contratio


// Este concepto se usa bastante por ejemplo en react cuando dependiendo de un valor, cargamos o un componente u otro
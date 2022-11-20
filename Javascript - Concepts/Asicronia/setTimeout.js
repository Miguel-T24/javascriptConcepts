'use strict'

// Temporizadores

// SetTimeout recibe como parametro una funcion callback y el tiempo en milisegundo
// setTimeout(() => {} , 1000);

console.log(`Inicio`);

setTimeout(() => {
    console.log(`Esto se ejecuta una sola vez`);
}, 3000);


// Para ejecutar indefinidas veces una accion en un intervalo de tiempo se usa set interval
// Recibe como parametro una funcion callback y el intervalode tiempo en milisegundos

setInterval(() => {
    console.log(`Intervalo de Tiempo`);
}, 4000);


// Podemos hacer por ejemplo un reloj

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

// Podemos detener un setTimeout con la funcion clearTimeout(), pero debemos guardar el setTimeout en una variable y enviarla como parametro

let temporizador = setTimeout(() => console.log(`setTimeout`), 1000);
setTimeout(() => {clearTimeout(temporizador) ; console.log(`Despues del Clear Timeout`)}, 2000);

let interval = setInterval(() => console.log("Este es el interval"), 1000);
setTimeout(() => {clearInterval(interval) ; console.log(`Despues del Clear Interval`)},4000);

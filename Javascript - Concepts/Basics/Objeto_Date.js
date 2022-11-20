'use strict'

console.log(Date());

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
// Tanto day como month nos devuelve la posicion en el arreglo
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());

// Horas
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

console.log(Date.now());

let naci = new Date(1996, 4, 22);
console.log(naci);
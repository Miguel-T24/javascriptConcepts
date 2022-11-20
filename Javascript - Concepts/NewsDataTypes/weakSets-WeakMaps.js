'use strict'

// Conjuntos debiles y mapas debiles
// La llaves tiene que ser de tipo objeto
// No son elementos iterables (no lo podemos recorrer)
// No lo podemos eliminar todo de un solo, solamente uno por uno
// No tiene la propiedad size
// Sets son especies de arreglos mejorados y maps son objetos mejorados

// Con un conjunto puedo pasar todos los valores
// const hs = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","HOla"]);
// console.log(hs);

// // Con un conjunto debil solo puedo pasar valres de uno en uno, por eso la siguiente linea me da error
// // const ws = new WeakSet([1,2,3,3,4,5,true,false,false,{},{},"hola","HOla"]);
// // console.log(ws);

// // Forma Correcta
// const ws = new WeakSet();
// // Solo acepta referencias debiles

// let valor1 = {'valor1':1};
// let valor2 = {'valor2':2};
// let valor3 = {'valor3':3};

// ws.add(valor1);
// ws.add(valor2);
// ws.add(valor3);

// console.log(ws);

// // Para saber si existe
// console.log(ws.has(valor1));
// console.log(ws.has(valor3));

// // Para eliminar
// ws.delete(valor2);
// console.log(ws);
// console.log(ws.has(valor2));
// ws.add(valor2);
// console.log(ws.has(valor2));

// // el weakset elimina automaticamente los valores nullos de la memoria
// // Para probar esto, creamos una funcion setIntervar que se ejecute cada segundo y a los 5 segundos le agrego nulo a los valores del weakset y esto lo eliminara automaticamente

// const intervalo = setInterval(() => {
//     console.log(ws);
//     setTimeout(() => {
//         valor1 = null;
//         valor2 = null;
//         valor3 = null;
//     }, 5000);

//     setTimeout(() => {
//         clearInterval(intervalo);
//     }, 10000);
// }, 1000);


// WeakMap

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1,1);
wm.set(llave2,2);

console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);
console.log(wm);

wm.set(llave2,2);
console.log(wm);

// Pasa los mismo que con weakset se elimina de memoria si le asigno null
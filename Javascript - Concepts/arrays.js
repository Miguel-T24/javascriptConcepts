'use strict'

const a = [];
const b = [1,true, "Hola" , ["A","B","C", [1,2,3]]];
console.log(a);
console.log(b);

// Para acceder a un elemento, se hace por coordenadas, y asi con todos los tipos de datos compuestos

console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3][2]);
console.log(b[3][3][0]);

// Otra forma de declarar una arreglo
const c = Array.of("X","Y","Z",9,8,7);
console.log(c);

// Lenar arreglos con un valor
const d = Array(20).fill(false)
console.log(d);

// Formas que estan en desuso
//***************************/
const e = new Array();
console.log(e);

const f = new Array(1,2,3,true, false);
console.log(f);
//****************************/

// metodo push para agregar mas elemetos a un arreglo
const colores = ["Rojo", "verde", "Azul"]; 
console.log(colores);
colores.push("negro")
console.log(colores);

// Quitar el ultimo elemento
colores.pop()
console.log(colores);


colores.forEach(function(el, index){
    console.log(`<li id = "${index}">${el}</li>`);
})



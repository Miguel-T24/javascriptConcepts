'use strict'

const set = new Set([1,2,3,3,4,5,true,false,false, {},{},"hola", "HOla"]);

console.log(set);

// si quiero saber el tamaño de un set
console.log(set.size); 

// Para agregar valores al set de forma individual
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log(`Recorriendo set`);
for(let item of set){
    console.log(item);
}

console.log(`Recorriendo set2`);
// for(let item of set2){
//     console.log(item);
// }

// Tambien como se puede con una funcion forEach
set2.forEach(item => console.log(item));

// accede a cada posicion del set
console.log(`Accediendo a las posiciones de un set:`);
let arr = Array.from(set);
console.log(arr[0]);
console.log(Array.from(set)[1]);


// Eliminar valores de un set
set.delete("HOla");
console.log(set);

// Comprobar si un valor existe dentro una coleccion de datos
console.log(set.has("hola")); //Devuelve true
console.log(set.has(19)); //Devuelve false porque no existe

// vaciar un conjunto
set2.clear()
console.log(set2);
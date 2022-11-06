'use strict'

let contador = 0;

while(contador < 10){
    console.log(contador);
    contador++;    
}

console.log(`Con do While`);
contador  = 0;
do{
    console.log(contador);
    contador++;
}while(contador < 10)


console.log(`Con For`);
for (let i = 0; i < 10; i++) {
    console.log(contador);
}


// For in y for of

// For in recorre solo un objeto de javascript mientras que for of recorre un objeto iterable (un arreglo, un string, etc).
const jon = {
    nombre : "jon",
    apellido: "mircha",
    edad: 35
}

for (const propiedad in jon){
    console.log(`key: ${propiedad}, value: ${jon[propiedad]}`);
}

let numeros = [1,2,3,4,5];
for (const elemento of numeros){
    console.log(elemento);
}
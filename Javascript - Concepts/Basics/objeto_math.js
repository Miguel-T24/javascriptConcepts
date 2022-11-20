'use strict'

// Es un objeto estatico, podemos delclararlo sin instanciarlo

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.2)); //siempre redondea al numero Mayor
console.log(Math.floor(7.2)); //Siempre redondea al numero Menor
console.log(Math.round(7.2)); //Redondea al mas cercano
console.log(Math.round(7.8));
console.log(Math.sqrt(81)); //Raiz cuadrada
console.log(Math.pow(5,2)); //Eleva a la potencia
console.log(Math.sign(-7.8)); //devuelve -1 si es negativo, 0 si es cero y 1 si es un entero
console.log(Math.random()); //Me da un numero aleatorio entre 0 y 1
console.log(Math.random() *10); //si queremos un numero en un rando, podemos multiplicarlo por el rango mayor
console.log(Math.round(Math.random() * 100)); //rendondeamos para que nos de decimal
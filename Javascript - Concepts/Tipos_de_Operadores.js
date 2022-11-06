'use strict'

// Operadores aritmeticos: + - * / % () 
let a  = 5 + (5-10) * 3;
let module = 5%2;

console.log(a);
console.log(module);

// Operadores relacionales
// > , < ,>= , <= , == , === , != , !== 

console.log(9>8);
console.log(8>9);
console.log(8>=9);
console.log(9>=8);
console.log(7<7);
console.log(7<=7);

// Los iguales

/*
 = un igual es asignacion de variables
 == dos iguales son comparacion de valores
 === tres iguales son comparacion inclusive el tipo de dato
*/

console.log('7' == 7);
console.log('7' === 7);
// Siempre usar tres iguales y nunca dos

// Incremento o Decremento

let i = 1;
// i= i+2;
i+=3;
console.log(i);
// funciona para suma resta division y multiplicacion


// Operador unario

i++;
console.log(i);

// Puedo usarlo al frente
++i
console.log(i);
// La diferencia es que el ++i primero se suma y en i++ primero es la variable y luego se suma

// Operadores logicos

/*
! - es Not
|| - es Or
&& - es AND
*/

console.log(!true);
console.log(!false);
console.log((9 === 9 ) ||("9" === 9));
console.log((9 === 9) && ("9" === 9));




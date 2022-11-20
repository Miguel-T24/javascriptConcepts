'use strict'

import password, {PI} from "./constantes.js"
import {sumar, restar, multdiv as md} from "./aritmetica.js" //Puedo oprner un alias
// import {multdiv} from "./aritmetica.js"

console.log(PI);

console.log(sumar(2,3));
console.log(restar(10,5));

// Otra forma de importar
console.log(md.multiplicar(5,5));
console.log(md.dividir(10,5));

// Export default, tiene que ver con la destructuracion
console.log(password);





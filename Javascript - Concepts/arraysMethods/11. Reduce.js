// 11. reduce(): Aplica una funcion a un acumulador y a cada valor de una array (de izquiera a derecha) para reducirlo a un unico valor.

const array = [1,2,3,4,5,6,7];
const resultarray = array.reduce((Accumulator, current) => Accumulator + current)
console.log(resultarray);
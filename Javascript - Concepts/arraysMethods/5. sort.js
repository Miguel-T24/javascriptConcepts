// 5. Sort(): Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenara en orden ascendente (de la A a la Z) por defecto

const array =[4,8,6,3,21,22,7,9];
const alphabet = ['g', 'd','c' ,'o','d','e','v'];

// ordenar en forma ascendente el array
const ascArray = array.sort((a,b) => a<b?-1:1)
console.log(ascArray);
// ordenar en forma descendente el array
const descArray = array.sort((a,b) => a>b?-1:1)
console.log(descArray);


// ordenar en forma ascendente el alfabeto
const ascAlphabet = alphabet.sort((a,b) => a<b?-1:1)
console.log(ascAlphabet);
// ordenar en forma descendente el alfabeto
const descAlphabet = alphabet.sort((a,b) => a>b?-1:1)
console.log(descAlphabet);
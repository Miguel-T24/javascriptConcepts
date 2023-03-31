'use strict'

// 1. Map: Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original

// array.map((element, index, array) => {operation})


console.log(`Primer Ejemplo`);
const array = [1,2,3,4,5,6,7];
const resultArray = array.map(element => element + 10);

console.log(resultArray);

console.log(`Segundo Ejemplo`);

const array1 = [1,2,3,4,5,6,7];
array1.map((el,index,array) =>{
    console.log("Element: ",el);
    console.log("Index: ",index);
    // console.log(array);
    // console.log(this);
     
},80)





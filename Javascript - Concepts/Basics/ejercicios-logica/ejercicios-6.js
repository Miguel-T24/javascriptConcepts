'use strict'


// 1. Programa una funcion que dado un array numerico devuelve otro array con los numeros elevados al cuadrado,, pe mi_funcion([1,4,5]) devolvera [1,16,25]

const el = (array) => {
    const array1 = array.map((num) => Math.pow(num,2));
    return array1
}

console.log(el([1,4,5]));

// 2. Programa una funcion que dado un array devuelva el numero ams alto y el mas bajo de dicho array, pe.Funcion([1,2,5,99,-60]) devolvera (99-60)

const albaj = (array) =>{
        return "Maximo: " + Math.max.apply(Math, array) + " Minimo: "+ Math.min.apply(Math,array);
        // Otra forma de hacerlo
        // Math.max(...array)
        // Math.min(...array)
}

console.log(albaj([1,2,5,99,-60]));


// 3. Programa una funcion que dado un array de numeros devuelva un objeto con 2 arreglos en el primero almacena los numeros pares y en el segundo los impares, pe miFuncion([1,2,3,4,5,6,7,8,9,0]) devolvera {pares: [2,4,6,7,0], impares: [1,3,4,7,9]}

const objParImpar = (array) => {
    let pares = [];
    let impares = [];

    for(let i = 0; i < array.length ; i++){
        if((array[i] % 2) === 0){
            pares.push(array[i]);
        }else{
            impares.push(array[i]);
        }
    }

    const obj = {'Pares' : pares ,"Impares" : impares}

    return obj
}

console.log(objParImpar([1,2,3,4,5,6,7,8,9,0]));
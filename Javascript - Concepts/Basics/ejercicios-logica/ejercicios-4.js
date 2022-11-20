'use strict'

// 1. Programa una funcion que determine si un numero es primo

const primo = (num) => {
    let divisible = false;

    for(let i = 2 ; i< num ; i++){
        if((num % i ) === 0){
            divisible = true;
            break;
        }

    }
    return (divisible)
    ?console.log("El numero No es primo")
    :console.log("El numero es primo");
}

primo(4);

// 2. Programa una funcion que determine si un numero es par o impar
const parImpar = (num) => { 
    return ((num % 2) === 0)
    ?console.log("Es un numero par")
    :console.log("Es un numero impar");
}

parImpar(8);

// 3. Programa una funcion para convertir grados celsius a Fahrenheit y viceversa

const gradoFarenheit = (num, opc )=> {
    if(opc === 1 ){
        return num * 1.8 + 32;
    }else if(opc === 2 ){
        return (num - 32) / 1.8
    }else{
        return "opcion invalida";
    }
}

console.log(gradoFarenheit(20, 1));
console.log(gradoFarenheit(50, 2));
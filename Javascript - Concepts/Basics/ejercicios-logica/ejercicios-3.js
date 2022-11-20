'use strict'

/*
1. Programa una funcion que obtenga un numero aleatorio entre 501 y 600
*/

const numAleatorio = () => Math.floor(Math.random() * (600 - 501)) + 501;

console.log(numAleatorio());

// 2. Programa una funcion que reciba un numero y evalue si es capicua o no(que se lee igual en un sentido que en otro), pe. mifuncion(2002) devolvera true

const capicua = num =>{
    num = num.toString();
    let numInv = num.split("").reverse().join("");
    return (num === numInv)
    ? "El numero es capicua" 
    : "El numero no es capicua";
}

console.log(capicua(2002));


// 3. Programa una funcion que calcule el factorial de un numero (el factorial de un entero positivo n , se define como el producto d etodos los numero enteros positivos desde 1 hasta n),  pe miFuncion(5) devolvera 120.

const factorial = (num) => {
    let numResult = num;
    for(let i = num - 1; i > 0;i--){
        if (numResult === num){
            numResult = numResult * (numResult - 1);
            num = num - 2;
        }else{
            numResult = numResult * num;
            num = num - 1;
        }
    }
    return numResult
}


console.log(`El factorial es: ` + factorial(4));

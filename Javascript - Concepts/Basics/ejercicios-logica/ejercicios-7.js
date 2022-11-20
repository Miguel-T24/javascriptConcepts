'use strict'

// 1. Programa una funcion que dado un arreglo de numeros devuelva un objeto con dos arreglos, el primero tendra los numeros ordenados en forma ascendente y el segundo de forma descendente, pe. miFuncion([7,5,7,8,6]) devolvera {asc : [5,6,7,7,8], desc : [8,7,7,6,5]}

const objAscDesc = array => {
    let obj = {}
    const arrayAsc = array.sort();
    obj["ASC"] = arrayAsc;
    const arrayDesc = array.reverse();
    obj["DESC"] = arrayDesc;

    return obj;
}


console.log(objAscDesc([7,5,7,8,6]));
// No funciona por algun problema con la asignacion en el objeto

// 2. Programa una funcion que dado un arreglo de elemtnos, elimine los duplicados, pe. miFuncion(["x",10, "x", 2, "10" , 10 ,true,true]) devolvera ["x" , 10 ,2,"10"];

const removeDuplicate = array => [...new Set(array)];

console.log(removeDuplicate(["x",10, "x", 2, "10" , 10 ,true,true]));


// 3. Programa una funcion que dado un arreglo de numero obtenga el promedio, pe promdeio([9,8,7,6,5,4,3,2,1,0]) devolvera 4.5

const promedio = array => {
    const funReduce = (tot,el) => tot + el;
    let total = array.reduce(funReduce , 0);
    return total / array.length;
}

console.log(promedio([9,8,7,6,5,4,3,2,1,0]))




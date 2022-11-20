'use strict'

/* 5. Programa una funcion que invierta las palabras de una cadena de texto, pe.miFuncion("Hola Mundo") devolvera "odnum aloh"
*/
const revertirPalabra = (cadena) => (cadena === "")
    ?console.warn("La cadena esta vacia")
    :(typeof cadena !== "string")
    ?console.warn("La cadena no es un string")
    :cadena.split("").reverse().join("");

console.log(revertirPalabra("Hola mundo"));

/*
    6. Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo, pe miFuncion ("Hola mundo adios mundo" , "Mundo") devolvera 2
*/

const contarPalabra = (string, palabra) => {
    if(string === "" || palabra ===""){
        console.warn("Valores Vacios");
    }else if (typeof string !== "string" || typeof palabra !== "string") {
        console.warn("Valores no son strings")
    }else{
        const arrS = string.split(" ");
        let cont = 0;
        for (let i = 0 ; i<arrS.length; i++){
            if(arrS[i] === palabra){
                cont++;
            }
        }
        return cont;
    }
}

const cant = contarPalabra("Hola mundo adios mundo mundo mundo", "mundo");
console.log(cant);


/* 
    7. Programa una funcion que valide si una palabra o frase dada, es una palindromo (que se lee igual en un sentido que en el otro), pe. miFuncion("Salas") devolvera true
*/

const palindromo = (pal) => {
    let palrev = pal.split("").reverse().join("");
    (pal === palrev)
    ? console.log(`${pal} es un palindromo`)
    :console.log(`${pal} NO es un palindromo`)
}

palindromo("salas");


/* 
    8. Programa una funcion que elimine cierto patron de caracteres de un texto dado, pe miFuncion ("xyz1,xyz2,xyz3,xyz4,xyz5" , "xyz") devolvera "1 2 3 4 5"
*/

const delPatron = (text, patron) => text.replace(new RegExp(patron, 'ig'),"");

console.log(delPatron("xyz1,xyz2,xyz3,xyz4,xyz5" , "xyz"));


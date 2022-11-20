'use strict'

/*
1. Programa una funcion que cuente el numero de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolvera 10

*/

function contarCadena(cad){
    return cad.length;
}
let cadena = "Hola Mundo";
if (typeof(cadena) !== "string"){
    console.warn(`Esto no es una cadena, intentelo nuevamente`);
}else{
    console.log("La cantidad de caracteres en la cadena es de: " + contarCadena(cadena) + " Caracteres");
}

/*      
2. Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados,
pe.miFuncion("Hola mundo" , 4) devilvera "hola"

*/

function recordarTexto(text, rec){
    return text.substring(0,rec);
}

let texto = "Hola Mundo";
if (typeof(texto) !== "string"){
    console.warn(`El texto no es un string`);
}else{
    console.log(`Su texto recortado es: `+recordarTexto(texto,4));
}

/*
3. Programa una funcion que dada un string te devuelva un Array de textos separados por cierto caracter, pe. mifuncion('Hola que tal',' ') devolvera ['hola','que', 'tal'];

*/

function arrcor(arr,sep){
 return arr.split(sep);
}

let texto1 = "Hola que tal";
if (typeof(texto1) !== "string"){
    console.warn(`El texto ingresado no es un string`);
}else{
    console.log(arrcor(texto1 , " "));
}

/*
4. Programa una funcion que repita un texto X veces, pe. miFuncion("Hola Mundo",3) devolvera hola mundo hola mundo
*/

function repetirTexto(text, x){
    return text.repeat(x);
}
let texto2 = "Hola Mundo";
if (typeof(texto2) !== "string"){
    console.warn(`El texto ingresado no es un string`);
}else{
    console.log(repetirTexto(texto2, 3));
}

/*
Observacion:
    1. Hacer toda la complejicad en la funcion, validacion etc
    2. utilizar funciones expresadas, solo para mas orden
    3. utilizar valores por defecto en los argumentos de la funcion
    4. utilizar operador ternairo anidados
*/
'use strict'
// variables

// var: si declaras una variable con var, la variable estará disponible en el ámbito global
// let: la variable estará disponible en el ámbito en el que se declaró

//Usar Var es una mala practica

// En este ejemplo, el contenido de la variable musica sale del ambito en el que fue declarada, por lo que provocará muchos problemas
console.log("************* VAR *************");
var musica = "Rock";
console.log("Variable musica antes del bloque: ", musica);
{
    var musica = "Pop";
    console.log("Variable musica dentro del bloque: ", musica);
}
console.log("Variable musica despues del bloque: ", musica);


// Copio el codigo exactamente igual pero declarando las variables con let
console.log("************* LET *************");

let musica2 = "Rock";
console.log("Variable musica2 antes del bloque: ", musica2);
{
    let musica2 = "Pop";
    console.log("Variable musica2 dentro del bloque: ", musica2);
}
console.log("Variable musica2 despues del bloque: ", musica2);


// Constantes
console.log("******** Constantes ********");

const PI = 3.1416
console.log(PI);

// No se puede declarar una constante vacia

// Una costante no funciona de igual forma para valores primitivos que para valores compuestos
// Para los tiops de datos compuestos, podemos agregra o quitar elementos


//  Strings
console.log(`********** Strings **********`);

let nombre = 'Miguel';
let apellido = "Tamayo";
let saludo = new String("Hola mundo"); //La creo con un constructor

console.log(nombre, apellido, saludo);
console.log(
    nombre.length,
    apellido.length,
    saludo.length
);

console.log(`Mayusculas ${nombre.toLocaleUpperCase()} - Minuscula ${apellido.toLocaleLowerCase()}`);

console.log(`Metodo para ver si en un string incluye una palabra, devuelve true o false`);
console.log(nombre.includes("M"));

console.log(`El metodo trim quita los espacios en blanco ates y despues de los textos`);
let saludoSpace = "     Hola Mundo    "
console.log(`${saludoSpace}`);
console.log(`${saludoSpace.trim()}`);

// Split separa un string a funcion del parametro dado, y devuelve un arreglo
let texto = "Este,es,un texto,separado,por,comas";
console.log(texto.split(','));


// Templates Strings
// Concatenacion

let nombre1 = 'jon';
let apellido1 = "Mircha";
let saludo1 = "Hola Mi nombre es " + nombre1 + " " + apellido1 + "."

console.log(`${saludo1}`);


// Templates Strings
console.log(`********** Templates Strings **********`);

let saludo2 = `Hola mi nombre es ${nombre1} ${apellido1}.`;
console.log(saludo2);

// Nos puede servir para copiar codigo html para verlo de forma mas entendible
let ul = `<ul>
            <li>Verano</li>
            <li>Invierno</li>
            <li>Otoño</li>
            <li>Primavera</li>
          </ul>`
console.log(ul);

// Tipo de Dato Number
console.log(`********** Numbers ***********`);

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6"

console.log(a,b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
// Convertir un tipo de dato a otro
console.log((c + parseInt(d)).toFixed(2));
console.log(c + parseFloat(d));

// Tipo de Dato Boleano Boolean
console.log(`***** Tipo de Dato Booleano *****`);
let verdadero = true;
let falso = false;

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);

// Rarezas de javascript
console.log(`Rarezas de tipos de datos Booleanos`);
console.log(`Cero tiende a falso: ` + Boolean(0));
console.log(`numero negativo tiende a verdadero: ` + Boolean(-1));
console.log(`Cadena Vacia tiende a falso: ` + Boolean(""));
console.log(`Cadena con un espacio en blanco tiende a verdadero: ` + Boolean(" "));

// https://developer.mozilla.org/en-US/docs/Glossary/Truthy

console.log(`\nDiferencias entre undefined, null y NaN (Not A Number)`);

//  Null y Undefined representan un valor ausente, ambas variables estan vacias

// Undefined, no se le asigna valor cuando se le declara
let indefinida;
console.log(indefinida);

// Null se le asigna el valor null a la variable
let nulo = null;
console.log(nulo);

// NaN - Cuando hagamos operaciones y uno de los datos no e sun numero
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);
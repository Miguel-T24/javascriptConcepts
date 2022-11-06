"use strict";
// Basics Types
let myTypeString = 'Hello World!';
let myTypeNumber = 33;
let myTypeBoolean = true;
// Arrays
let arrayNumber = [1, 2, 3];
let arrayNumber2 = [1, 2, 3];
let arrayString = ["Uno", "Dos"];
let arrAny = ["hola", 2, false]; //array de cualquir tipo
// Tuple
// Especificamos que va a recibi en cada posicion
let tuplePlayers = ["Dominc", 50, true];
// Tuple Array
let players;
// Array de Tuplas
players = [
    [1, 'Lberon'],
    [2, 'Durant'],
    [3, 'Carry']
];
// Inferencia de tipos
let myVariable;
let myVaribale1;
let miVariable2 = 333;
// Composicion de tipos
// Combinar diferentes tipos
// Unions: una variable puede ser de dos o mas tipos
let myVariable3;
// Enums
// Definir un conjunto de constantes con nombres
// Pueden ser numericos y cadenas de textos
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Admin"] = 2] = "Admin";
    Roles[Roles["SuperAdmin"] = 3] = "SuperAdmin";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
// Objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.User);
// Type_assertion
let channel = "Domincode";
let channelStr = channel;
let channelstr = channel;
// const myCanvas = document.getElementById('main') as HTMLCanvasElement;
// const myCanvas = <HTMLCanvasElement>document.getElementById('main');
//  Funciones
function greet(name) {
    console.log(`Hello, ${name.toUpperCase()}`);
}
greet("Miguel");
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`Latitude & Longitude are LAT ${position.lat} LONG: ${position.long}`);
}
printPosition({ lat: 2, long: 5 });

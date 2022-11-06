// Basics Types
let myTypeString : string = 'Hello World!';
let myTypeNumber : number = 33;
let myTypeBoolean : boolean = true;

// Arrays
let arrayNumber : number[] = [1,2,3];
let arrayNumber2 : Array<number> = [1,2,3];
let arrayString : string[] = ["Uno", "Dos"];

let arrAny : any[] = ["hola" , 2 , false]; //array de cualquir tipo

// Tuple
// Especificamos que va a recibi en cada posicion
let tuplePlayers : [string, number, boolean] = ["Dominc" , 50, true];

// Tuple Array
let players: [number, string][];

// Array de Tuplas
players=[
    [1,'Lberon'],
    [2,'Durant'],
    [3,'Carry']
];

// Inferencia de tipos
let myVariable;
let myVaribale1: string;
let miVariable2 = 333; 

// Composicion de tipos
// Combinar diferentes tipos

// Unions: una variable puede ser de dos o mas tipos

let myVariable3 :string | number | null;


// Enums
// Definir un conjunto de constantes con nombres
// Pueden ser numericos y cadenas de textos
enum Roles{
    User = 1,
    Admin = 2 ,
    SuperAdmin = 3
}

console.log(Roles.Admin)



// Objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
}

console.log(roles.User);

// Type_assertion

let channel : any = "Domincode";
let channelStr = <string>channel;
let channelstr = channel as string;

// const myCanvas = document.getElementById('main') as HTMLCanvasElement;
// const myCanvas = <HTMLCanvasElement>document.getElementById('main');

//  Funciones
function greet(name: string){
    console.log(`Hello, ${name.toUpperCase()!}`)
}

greet("Miguel");


function getNumber():number{
    return Math.floor(Math.random() * 100);
}

console.log(getNumber());


function printPosition(position: {lat:number, long : number | string}){
    console.log(`Latitude & Longitude are LAT ${position.lat} LONG: ${position.long}`);
}

printPosition({lat: 2 , long: 5});

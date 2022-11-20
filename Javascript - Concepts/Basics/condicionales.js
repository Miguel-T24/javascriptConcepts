'use strict'

// if - else
let edad = 17;
if (edad >= 18){
    console.log(`Eres Mayor de Edad`);
}else{
    console.log(`Eres Menor de Edad`);
}

// if anidados
/*
    Dejame Dormir   00:00am - 05:00am
    Buenos dias     06:00am - 11:00am
    Buenas Tardes   12:00pm - 18:00pm
    Buenas Noches   19:00pm - 23:00pm   
*/


let hora = 5;

if(hora >= 0 &&  hora <=5){
    console.log(`Dejame Dormir`);
}else if (hora >= 6 && hora <= 11){
    console.log(`Buenos Dias`);
}else if(hora >= 12 && hora <= 18){
    console.log(`Buenas Tardes`);
}else if(hora >= 19 && hora <= 23){
    console.log(`Buenas Noches`);
}else{
    console.log(`Numero Ingresado no valido`);
}

// Operador ternario
let eresMayor = (edad >= 18) 
?"eres Mayor de Edad"
:"Eres Menor de Edad";

console.log(eresMayor);


// Switch - case
/*
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sabado - 6
*/

let dia = 25;
switch(dia){
    case 0:
        console.log(`Domingo`);
        break
    case 1:
        console.log(`Lunes`);
        break
    case 2:
        console.log(`Martes`);
        break
    case 3:
        console.log(`Miercoles`);
        break
    case 4:
        console.log(`Jueves`);
        break
    case 5:
        console.log(`Viernes`);
        break
    case 6:
        console.log(`Sabado`);
        break
    default:
        console.log(`El dia no existe`);
}
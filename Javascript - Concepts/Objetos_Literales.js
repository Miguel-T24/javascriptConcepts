'use strict'

let nombre = "Kenai",
    edad = 7;

    const perro = {
        nombre: nombre,
        edad: edad,
        ladrar: function(){
            console.log(`guau guau!`);
        }
    }

// Esto es sin objetos literales
console.log(perro);
perro.ladrar();

// Objetos Literales
// El nombre de la propiedad e sigual al nombre de la variable por lo que no hay que escribirlo dos veces
const dog = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar(){
        console.log("GUAAAAuu!");
        
    }
}

console.log(dog);
dog.ladrar();
    

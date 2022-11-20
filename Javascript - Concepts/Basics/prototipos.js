'use strict'

// Javascript funciona por prototipos. Cuando escribimos clases, javascript lo convierte a una funcion prototipo.

// Un prototipo es un mecanismo por el cual un objeto puede heredar atributo y metodos

// const animal = {
//     nombre : "Snoopy",
//     sonar(){
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }

// const animal2 = {
//     nombre: "Lola Bunny",
//     sonar(){
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }
// console.log(animal);

// Si quiero generar n cantidad de animales

// funcion constructora

// function Animal(nombre, genero){
//     // Atributos
//     this.nombre = nombre;
//     this.genero = genero;

    // Metodos
    // Es mejor sacar los metodos porque cada vez que hago una instancia hacia una funcion prototipo, se cargan los metodos y eso hace el programa menos eficiente
    // this.sonar = function () {
    //     console.log("Hago sonidos porque estoy vivo");
    // }
    // this.saludar = function(){
    //     console.log(`Hola me llamo ${this.nombre}`);
    // }
// }

// Funcion contructora donde asignamos los metodos al prototipo, no a la funcion como tal
// function Animal(nombre, genero){
//     // Atributos
//     this.nombre = nombre;
//     this.genero = genero;
// }

// // Metodos asignados al prototipo de la funcion constructoras
// Animal.prototype.sonar = function () {
//     console.log("Hago sonidos porque estoy vivo");
// }
// Animal.prototype.saludar = function(){
//     console.log(`Hola me llamo ${this.nombre}`);
// } 
// // Herencia Prototipica
// function Perro(nombre, genero, tamano){
//     this.super = Animal;
//     this.super(nombre, genero);
//     this.tamano = tamano;

// }
// // Perro esta heredando de Animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;

// // sobreescritura de metodos dle prototipo padre en el hijo
// Perro.prototype.sonar = function(){
//     console.log(`Soy un perro y mi sonido es un ladrido`);
// }
// Perro.prototype.ladrar = function(){
//     console.log(`Gua guau!`);
// }

// const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
// lolaBunny = new Animal("Lola Bunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// snoopy.saludar();
// snoopy.ladrar();

// lolaBunny.sonar();
// lolaBunny.saludar();




// Clases y Herencia
class Animal{
    // Constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    // Metodos
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre, genero, tamano){
        super(nombre, genero);
        this.tamano = tamano;
        this.raza = null;
    }

    sonar(){
        console.log(`Soy un perro y mi sonido es un ladrido y soy ${this.tamano}`);
    }
    ladrar(){
        console.log(`Guau Guau`);
    }

    
    // Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
    // Puedo ejecutarlo son necesidad de instanciarlo en la clase
    static queEres(){
        console.log(`Los perros somos animales mamiferos que pertenecemos a la familia d elos caninos. somo considerados los mejores amigos del hombre`);
    }

    // Getters y Setters
    // Funciones que 
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby Doo", "Macho","Gigante");

console.log(mimi);
console.log(scooby);

mimi.saludar();
mimi.sonar();

scooby.saludar();
scooby.sonar();
scooby.ladrar();

// Puedo ejecutarlo si instanciar las clases
Perro.queEres();

// Aunque son metodos, se tratan como atributos
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);

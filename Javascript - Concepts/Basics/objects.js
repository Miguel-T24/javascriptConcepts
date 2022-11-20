'use strict'

// Usar const cuando se declara objetos
const b = {}

const jon = {
    nombre : "Jon",
    apellido: "Mircha",
    edad: 35,
    pasatiempo: ["Correr", "Hacer Ejercicio", "Dar Clases"],
    soltero: false,
    contacto: {
        email: "jonmircha@gmail.com",
        twitter: "@jonmircha",
        movil: "654654965"
    },
    saludar: function(){
        console.log(`Hola :)`);
    },
    diceMiNombre : function(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

console.log(jon);
console.log(jon["nombre"]);
console.log(jon["apellido"]);

console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiempo);
console.log(jon.pasatiempo[1]);
console.log(jon.contacto.twitter);

jon.saludar();
jon.diceMiNombre();

// Ver las llaves y los valores de los objetos
console.log(Object.keys(jon));
console.log(Object.values(jon));

// Verifica si la propiedad existe en un objeto, devuelve un booleano
console.log(jon.hasOwnProperty("nombre"));
console.log(jon.hasOwnProperty("nacimiento"));
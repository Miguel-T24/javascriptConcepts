// 'use strict'

console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir(){
    console.log(this.nombre);
}
imprimir();

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function(){
        console.log(this.nombre);
    }
}
obj.imprimir();

const obj2 = {
    nombre : "Contexto Objeto 2",
    imprimir
}
obj2.imprimir(); // Imprime el Contexto objeto 2

const obj3 = {
    nombre : "Contexto Objeto 3",
    imprimir: () =>{
        console.log(this.nombre);
    }
}

obj3.imprimir(); //Imprime el objeto padre, no el del ambito


function Persona(nombre) {
    this.nombre = nombre;
    // return console.log(this.nombre);

    // Clojure es cuando envolvemos una funcion dentro de una funcion y la estamos retornando
    // return function(){
    //     console.log(this.nombre); //Como este scope no tiene una propiedad nombre, nos retorna la propiedad nombre del contexto global por eso imprime "Contexto global"
    // }

    // Si retornara como una arrow function, tomari ael contexto del padre, que en este caso es jon y lo imprime
    return () => console.log(this.nombre);
}

let jon = new Persona('jon');
jon();
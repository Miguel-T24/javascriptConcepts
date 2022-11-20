'use strict'

// objeto
const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

// Handler o manejador
const manejador = {
    set(obj,prop,valor){
        obj[prop] = valor;
    }
}

const jon = new Proxy(persona, manejador);

console.log(jon);

jon.nombre = "jon";
jon.apellido = "Mircha";
jon.edad = 35;

console.log(jon);

// Nunca me salio pero voy a seguir el curso

// 'use strict'

console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde ${this.lugar}`);
}
saludar();

const obj = {
    lugar: "Contexto Objeto"
}
saludar.call(obj, "Hola" , "Jon"); //Imprime el contexto objeto
saludar.apply(obj, ["Hola", "Jon"]); // tambien imprime el contexto objeto
// La diferencia es que recibe parametros de forma distinta
// Call rexibe parametros de forma de funcion y apply como un arreglo

// Null y this es como regresar al contexto global
saludar.call(null, "Hola", "Miguel");
saludar.call(this, "Hola", "Miguel");
saludar.apply(null,["Hola" , "Miguel"])
saludar.apply(this,["Hola" , "Miguel"])
// Hola Miguel desde el contexto Global



// Binda enlaza un contexto con otro
const persona = {
    nombre: "jon",
    saludar: function (){
        console.log(`hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(persona)
}
otraPersona.saludar();
'use strict'

// Objetos que nos sirven para almacenar conjunto de valores asociados a manera de objeto, es como si fueran objetos


const mapa = new Map();
// Agregra valores
mapa.set("Nombre", "Jon");
mapa.set("apellido", "Mircha");
mapa.set("edad", 35);

console.log(mapa);
console.log(mapa.size); // Cuantos elementos tiene el mapa
console.log(mapa.has("Nombre")); //Verificar si existe en el mapa
console.log(mapa.has("Correo"));
console.log(mapa.get("Nombre")); //Obtener los valores
mapa.set("Nombre", "Jonanthan Mircha"); //asignar un nuevo valor
console.log(mapa.get("Nombre"));
mapa.delete("apellido"); //Eliminar
console.log(mapa);

// Recorrer un mapa
for(let [key, value] of mapa){
    console.log(`Llave: "${key}" Valor: "${value}"`);
}

// Podemos hacer cosas raras como la llave sea null o undefined, o true o false
// Es desaconsejable
mapa.set(19, "Disecinueve");
mapa.set(false, "falso");
mapa.set({},{});
console.log(mapa);

// Funciona casi lo mismo que los objetos

// Otra forma de declararlo
const mapa2  = new Map([
    ["nombre", "Kenai"],
    ["Edad" , 7],
    ["Animal" , "Perro"],
    [null, "nulo"]
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
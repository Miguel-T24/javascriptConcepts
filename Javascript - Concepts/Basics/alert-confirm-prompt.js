'use strict'

console.log(window);

// No es necesairo colocar el windows.
// window.alert("Hola esto es una alerta");
// window.confirm("Esto es una confirmacion");
// window.prompt("Esto es un prompt y le permite al usuario ingresar un valor");

let alerta = alert("Esto es una alerta"),
confirmacion = confirm("Esto es una confirmacion"),
aviso = prompt("Esto es un aviso");

console.log(alerta); // undefined en consola
console.log(confirmacion); // aceptar true, cancelar false
console.log(aviso); //null si no ingresas nada / Coloca el texto si ingresas algo
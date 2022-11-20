'use strict'

// Si quisieramos utilizar parametros
// El problema es que toda funcion que reciba como parametro, recibira el evento
function saludar(nombre = "Desconocido"){
    alert(`Hola ${nombre}`);
    console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click",saludar);

// La solucion
// Dentro de la arrow function ejecuto la funcion saludar y como ya no es manejadora de eventos, puedo psarle los parametros que quiera
$eventoMultiple.addEventListener("click",() => saludar("Miguel"));

const removerDobleclick = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleclick);
    $eventoRemover.disabled = true;
}

const $eventoRemover = document.getElementById("evento-remove");
$eventoRemover.addEventListener("dblclick", removerDobleclick);
'use strict'

// Event Handler
// En este caso el evento se ejecuta en el html y la funcion en le js
function holaMundo(){
    alert("hola mundo");
    console.log(event);
}


// selecciono el elemento del html y le ejecuto la funcion
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
// La desventaja es que solo puede asignar una sola funcion a un evento semantico


// podemos hacerlo con una arrow function
// imprime siempre la ultima funcion que hagas
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e){ //puedo pasar e como parametro (event)
    alert("Hola mundo manejador de eventos semanticos");
    console.log(e); //utilizar la e, que equivale a event
}

// manejadores multiples, puedo asignar mutiples eventos a un elemento
// addevent Listener
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click",holaMundo);
// Haciendolo con arrowFunction
$eventoMultiple.addEventListener("click",(e) => {
    alert("Hola mundo manejador de eventos multiples con arrow function");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});
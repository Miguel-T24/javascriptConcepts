'use strict'    

// Una vez que un evento se origina, el evento se va propaando
// hay dos manera en la que podemos trabajar en cuanto al desplazamiento del flujo de eventos
// Burbuja: Del interno al mas externo. (Este viene por defecto)
// Captura: Del mas externo al mas interno

const $divEventos = document.querySelectorAll('.eventos-flujo div');
console.log($divEventos); //nodeList de los divs

function flujoEventos(e){
     console.log(`Hola te saluda:  ${this.className}, el click lo origino: ${e.target.className}`);
}

$divEventos.forEach(div => {
     //false: burbuja (por defecto), true: captura
    //  El tercer parametro tambien puede recibir un objeto
    div.addEventListener("click", flujoEventos, {
        caption: false,
        once: true, //solo ejecuta una sola vez
    });
})
// Si le doy click a uno de los divs se ejecutara la funcion la cantidad de veces que diga el numero
// Por ejemplo si le doy click en el div que dice 3, se progagara mi funcion tres veces ya que pasará pro el div 3, el 2 y el 1. por ende en consola me imprimira tres veces hola.
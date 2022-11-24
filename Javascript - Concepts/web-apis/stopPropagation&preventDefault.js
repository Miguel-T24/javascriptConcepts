'use strict'

// Stop Propagation

const $divEventos = document.querySelectorAll('.eventos-flujo div'),
$linkEvent = document.querySelector(".eventos-flujo a");
function flujoEventos(e){
    console.log(`Hola te saluda:  ${this.className}, el click lo origino: ${e.target.className}`);
    e.stopPropagation();
}
$divEventos.forEach((div) => {
    div.addEventListener("click" , flujoEventos);
});

$linkEvent.addEventListener("click" , e =>{
    alert("Soy Jon Mircha");
    e.preventDefault(); //cancel action that have the element by default, in this case we cancel the link
})
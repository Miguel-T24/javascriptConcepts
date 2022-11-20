'use strict'


const $linkDOM = document.querySelector(".link-dom");

// Formas para obtener los estilos
console.log($linkDOM.style); //muestra todos los atributos de los estilos
console.log($linkDOM.getAttribute("style")); //muestra los atributos asignados
console.log($linkDOM.style.backgroundColor); // muestra el atributo seleccionado
console.log(window.getComputedStyle($linkDOM)); //muestra los atributos de los estilos
// Como el objeto windows es global no es necesario ponerlo
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //trae solo la propiedad que elijas 

// Formas de asignar valores a los estilos
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display" , "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.getAttribute("style"));

// Nombre Correcto: Custom Properties 


// Variables css
const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Debemos seguir el flujo, primero cambiamos el valor de la variable y luego lo asignamos
$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
$body.style.backgroundColor = varDarkColor;
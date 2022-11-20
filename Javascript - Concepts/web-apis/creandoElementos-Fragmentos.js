'use strict'

const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

const estaciones = ["Primavera" , "Verano" , "Otoño","Invierno"],
$ul = document.createElement("ul");

document.write("<h3> Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})

document.write("<h3>Continentes del Mundo");
const continentes = ["Africa", "America", "Asia" , "Europa", "Oceania"],
$ul1 = document.createElement("ul");
document.body.appendChild($ul1);
// $ul1.innerHTML = "";
continentes.forEach(el => {
    $ul1.innerHTML += `<li>${el}</li>`;
});


// Fragmentos
// Es como una variable que se crea dinamicamente, se le asigna los elementos al fragmento y luego es el framento el que lo manda a la pagina, esto mejora el performance

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    'Junio',
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
ul2 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
ul2.appendChild($fragment);
document.body.appendChild(ul2);
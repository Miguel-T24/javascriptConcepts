'use strict'

// colocar las etiquetas dinamicas en cualquier parte del codigo
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true);


$newCard.innerHTML = `
    <img src = "https://placeimg.com/200/200/any" alt= "Any">
    <figcaption>Any</figcaption>
`

$newCard.classList.add("card");
$cards.replaceChild($newCard, $cards.children[2]);

// antes de un nodo que tomemos como referencia
$cards.insertBefore($newCard, $cards.firstElementChild);

// Quiero elimnar la de naturaleza
$cards.removeChild($cards.lastElementChild);

// clonar
document.body.appendChild($cloneCards);
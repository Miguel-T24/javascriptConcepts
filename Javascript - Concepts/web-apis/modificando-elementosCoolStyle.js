'use strict'

/*

Existen tres metodos
.insertAdjacent...
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position,text)

Posiciones:
    beforebegin(hermano Anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");
let $contentCard = `
<img src = "https://placeimg.com/200/200/any" alt= "Any">
<figcaption></figcaption>
`

$newCard.classList.add("card");

// $cards.insertAdjacentElement("beforebegin" , $newCard); // Lo coloca en el hermano anterior
$newCard.insertAdjacentHTML("afterbegin" , $contentCard); // Lo coloca al inicio
// $cards.insertAdjacentElement("beforeend" , $newCard); // Lo coloca al final
// $cards.insertAdjacentElement("afterend" , $newCard); // Lo coloca en el hermano siguiente

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","ANY");
$cards.insertAdjacentElement("afterbegin", $newCard);

$cards.before($newCard); // lo hubica antes del inicio (beforebegin)
$cards.prepend($newCard); // lo ubica al inicio (afterbegin)
$cards.append($newCard); // lo ubica como ultimo (beforeend)
$cards.after($newCard); // lo ubica despues del final (afterend)
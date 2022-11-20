'use strict'

// Es un model de html
// Aunque se puede ver en la consola, no se visualiza

const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech"
    },
    {
        title:"Animales",
        img: "https://placeimg.com/200/200/animals"
    },
    {
        title:"Arquitectura",
        img: "https://placeimg.com/200/200/arch"
    },
    {
        title:"Gente",
        img: "https://placeimg.com/200/200/people"
    },
    {
        title:"Naturaleza",
        img: "https://placeimg.com/200/200/nature"
    }
]

cardContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src" , el.img);
    $template.querySelector("img").setAttribute("alt" , el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true); // Al colocar true nos dice que copie toda la estructura interna, si fuera false, solo copia las etiquetas vacias
    $fragment.appendChild($clone);
})  

$cards.appendChild($fragment);
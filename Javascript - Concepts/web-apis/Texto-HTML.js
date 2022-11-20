'use strict'

const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b> <i> DOM -Document Object Model</i></b>) es una API para documentos HTML y XML.
    </p>
    <p>
    Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark>El DOM no es parte de la espeficiacion de Javascript, es una API para los navegadores</mark>
    </p>
`;

$whatIsDOM.innerText = text; //Desfasado (Se usaba en inetrnet Explorer)
$whatIsDOM.textContent = text; // Los navegadores no lo soportan
$whatIsDOM.innerHTML = text; //Forma correcta. Inserta el parrafo dentro de la etiqueta especificada
$whatIsDOM.outerHTML = text; // Reemplaza la etiqueta especificada por el parrafo a insertar
'use strict'

console.log(window);
console.log(document);

// Ejemplo de como usar las webapis
let texto = "Hola soy tu amigo y docente digital jon mircha"
const hablar = () => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto);
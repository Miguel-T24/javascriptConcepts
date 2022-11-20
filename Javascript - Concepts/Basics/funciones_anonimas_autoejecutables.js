// 'use strict'

// funcion en la que englobas todo le codigo que quieres ejecutar

// (function(){})()

(function(){
    console.log(`Mi primer IIFE`);
})();

(function(d,w,c){
    console.log(`Mi segunda IIFE`);
    console.log(d);
    c.log("Este es un console log");
})(document, window, console);
// alert("Hola");


// Diferentes formas 

// Clasica
(function(){
    console.log("Version Clasica");
})();

// La Crockford (Javascript the googd parts)
((function(){
    console.log("Version Crockford");
})());

// Unaria
+function(){
    console.log('Version unaria')
}();

// Facebook
!function(){
    console.log("Version Facebook")
}();
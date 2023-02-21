'use strict'

const input1 = document.getElementById('input1');
input1.addEventListener('keydown', (e) =>{
    console.log(`Tecla presionada` , e.key);
})

const input2 = document.getElementById('input2');
input2.addEventListener('keyup', (e) =>{
    console.log(`Evento `,e);
    console.log(`key `,e.key);
    console.log(`value: `,e.target.value);
})
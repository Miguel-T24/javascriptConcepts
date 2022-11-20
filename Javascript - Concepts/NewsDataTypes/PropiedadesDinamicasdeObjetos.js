'use strict'

const objUsuarios = {
    [ `id_${Math.round(Math.random()*100 + 5)}`] : "Valor Aleatorio"
};
console.log(objUsuarios);

const usuarios = ['jon' , 'irma', 'Kala','kenai'];
usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario);
console.log(objUsuarios);
'use strict'

// 1. Programa una funcion para convertir numeros de base binaria a decimal y viceversa, pe miFuncion(200,2) devolvera 4 base 10

const binariaDecimal = (numero, base) => {
    return (base === 2)
    ?"El numero En base 10 es: " + parseInt(numero,2)
    :(base === 10)
        ?"El numero en Binario es : " + numero.toString(2)
        :"La base seleccioada no existe"
}

console.log(binariaDecimal(1111011,2));

// 2. Programa una funcion que devuelva el monto final despues de aplicar un descuento a una cantidad dada, pe mifincion(1000,20), devolvera 800

const montofinal = (numero , descuento) => numero - (numero * (descuento / 100) )

console.log("El Monto final es: " + montofinal(1000,20))

// 3. Programa una funcion que dada una fecha valida determine cuantos años han pasado hasta el dia de hoy, pe miFuncion(new Date(1984,4,23) devolvera 35 años (en 2020)

const years = date => (new Date(2020,1,1)).getFullYear() - date.getFullYear()

console.log(years(new Date(1984,4,23)));



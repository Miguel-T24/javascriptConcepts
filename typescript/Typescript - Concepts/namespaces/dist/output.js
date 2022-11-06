"use strict";
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculateIva(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculateIva = calculateIva;
        function calculatePenaltyIva(price) {
            return (price * 0.30) + price;
        }
        Taxes.calculatePenaltyIva = calculatePenaltyIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
/// <reference path="utility.ts"/>
let utils = Utility.Taxes;
console.log(utils.calculateIva(100));
console.log(utils.calculatePenaltyIva(200));
// Sale una error porue los dos dos fichero se han compilado de forma independinete y uno no sabe de la existencia del otro
// Para solventar ese error, seguir los siguientes pasos
// 1. tsconfig.json: buscar la propiedad modulo y cambiar el valor por system
// 2. buscar la propiedad outDir -  ./dist
// 3. La propiedad outFile - ./output.js

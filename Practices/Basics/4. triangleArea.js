'use strict'

let a = 5,b=6,c=7

let semiperimeter = (a+b+c) / 2
let area = Math.sqrt(semiperimeter*(semiperimeter - a)*(semiperimeter - b) * (semiperimeter - c))

console.log(`Area of the triangle is ${area}`);

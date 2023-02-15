'use strict'

// 4. Write a javascript program to find the area of a triangle were leangths of the three of its sides are 5, 6, 7

let a = 5,b=6,c=7

let semiperimeter = (a+b+c) / 2
let area = Math.sqrt(semiperimeter*(semiperimeter - a)*(semiperimeter - b) * (semiperimeter - c))

console.log(`Area of the triangle is ${area}`);

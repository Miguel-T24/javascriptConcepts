'use strict'

// 5. Write a javascript program to rotate the string "w3resource" in right direction by peiodically removing one letter from the end of the string and attaching it ti the front

let word = "w3resource"
let reverse = word.split("").reverse().join("")

console.log(`Word is ${word}, and reverse ${reverse}`);
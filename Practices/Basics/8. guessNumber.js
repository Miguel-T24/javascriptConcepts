'use strict'

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 

const guess = Math.round(Math.random() * 100);

let enterNumber = prompt("Guess Number");

if (guess === enterNumber){
    console.log(`Good Work`);
}else{
    console.log(`Not Matched, enter number is ${enterNumber} and the secret number was ${guess}`);
}
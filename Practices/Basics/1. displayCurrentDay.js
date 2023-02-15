'use strict'

// 1. Write a JavaScript program to display the current day and time
const days = {
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thrusday",
    5 : "Friday",
    6 : "Saturday",
    7 : "Sunday"
}

let day = new Date()
console.log(`
Today is ${days[day.getDate()]} 
Current time is: ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}
`);
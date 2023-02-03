'use strict'

// write a javascript program to get the current date
// format mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let day = new Date();

console.log(`
    First Format: ${day.getMonth() + 1}-${day.getDate()}-${day.getFullYear()}
    Second Format: ${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}
    Thrid Format: ${day.getDate()}-${day.getMonth() + 1}-${day.getFullYear()}
    Fourth format: ${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}
`);
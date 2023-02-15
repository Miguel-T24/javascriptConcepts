'use strict'

// 6. Write a javascript program to determinate whether a giver year is a leap year in the gregorian calendar

const year = 2017;

const leap = new Date(year, 1, 29).getDate() === 29;

if (leap){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is not a leap year`);
}
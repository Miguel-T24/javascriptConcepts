'use strict'

// 7. wirte a javascript program to find 1st january is being sundat between 2014 and 2050


for (let year = 2014 ; year <= 2050; year ++){
    let day = new Date(year, 0,1);
    if(day.getDay() === 0){
        console.log(`1st January is being a Sunday ${year}`);
    }
}
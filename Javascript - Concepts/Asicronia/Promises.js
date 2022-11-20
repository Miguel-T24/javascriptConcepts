'use strict'

function cuadradoPromise(value){
    if(typeof value !== "number") return Promise.reject(`Error el valor "${value}" no es un numero`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value, //value : value
                result: value * value
            })
        }, 0 | Math.random() * 1000); 
    })
}

cuadradoPromise(0)
.then((obj) => {
    // console.log(obj);
    console.log("Inicia Promise");
    console.log(`Promise: ${obj.value} , ${obj.result}`);
    return cuadradoPromise(1);
})
.then(obj => {
    console.log(`Promise: ${obj.value} , ${obj.result}`);
    return cuadradoPromise(2);
})
.then(obj => {
    console.log(`Promise: ${obj.value} , ${obj.result}`);
    return cuadradoPromise(3);
})
.then(obj => {
    console.log(`Promise: ${obj.value} , ${obj.result}`);
    return cuadradoPromise("4");
})
.then(obj => {
    console.log(`Promise: ${obj.value} , ${obj.result}`);
    return cuadradoPromise(5);
})
.then(obj => {
    console.log(`Promise: ${obj.value} , ${obj.result}`);
    console.log("Fin de la Promesa");
})
.catch(err => console.error(err));


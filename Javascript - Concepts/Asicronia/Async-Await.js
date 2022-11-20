'use strict'


function cuadradoPromise(value){
    if(typeof value !== "number") return Promise.reject(`Error "${value}" no es un numero`);

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 1000);
    });
}

// Funcion Asincrona Declarada
async function funcionAsincronaDeclarada(){
    try{
        console.log(`Inicio de Async Function`);
        let obj = await cuadradoPromise(0);
        console.log(`Async function: "${obj.value}, ${obj.result}"`);
        obj = await cuadradoPromise(1)
        console.log(`Async function: "${obj.value}, ${obj.result}"`);
        obj = await cuadradoPromise(2)
        console.log(`Async function: "${obj.value}, ${obj.result}"`);
        obj = await cuadradoPromise("3")
        console.log(`Async function: "${obj.value}, ${obj.result}"`);
        obj = await cuadradoPromise(4)
        console.log(`Async function: "${obj.value}, ${obj.result}"`);
        obj = await cuadradoPromise(5)
        console.log(`Async function: "${obj.value}, ${obj.result}"`);
        console.error("Fin de Async Function");
    }catch(err){
        console.error(err);
    }
}

funcionAsincronaDeclarada();

// funcion Asincrona expresada
const funcionAsincronaExpresada = async()=>{
    try{
    console.log(`Inicio de Async Function`);
    let obj = await cuadradoPromise(0);
    console.log(`Async function: "${obj.value}, ${obj.result}"`);
    obj = await cuadradoPromise(1)
    console.log(`Async function: "${obj.value}, ${obj.result}"`);
    obj = await cuadradoPromise(2)
    console.log(`Async function: "${obj.value}, ${obj.result}"`);
    obj = await cuadradoPromise("3")
    console.log(`Async function: "${obj.value}, ${obj.result}"`);
    obj = await cuadradoPromise(4)
    console.log(`Async function: "${obj.value}, ${obj.result}"`);
    obj = await cuadradoPromise(5)
    console.log(`Async function: "${obj.value}, ${obj.result}"`);
    console.log("Fin de Async Function");
    } catch(err){
        console.error(err);
    }
}

funcionAsincronaExpresada();
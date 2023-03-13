// 3. ForEach(): Permite iterar el contenido de un array. Recibe un callback que toma como parametro el elemento actual de la iteracion y el indice del mismo.

const array = ['banana','apple', 'orange' , 'pear'];
array.forEach((element, i,array) => {
    console.log(`${element} se encuentra en el indice ${i}`);
    console.log(array);
})

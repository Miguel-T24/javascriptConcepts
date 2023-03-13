// splice(): Cambia el contenido de un arraya eliminaod elementos existente y/o agregando, nuevos elementos


const array = ['apple', 'orange' , 'pear'];

// add
array.splice(1,0,'banana');
console.log(array);

// delete
getelement = array.splice(0,1);
console.log(getelement);
console.log(array);
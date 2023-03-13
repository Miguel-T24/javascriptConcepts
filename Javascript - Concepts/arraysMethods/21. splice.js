// splice(): Cambia el contenido de un arraya eliminaod elementos existente y/o agregando, nuevos elementos

// array.splice(position, how many delete, add this element if how many delete is 0)


const array = ['apple', 'orange' , 'pear'];

// add
array.splice(1,0,'banana');
console.log(array); //['apple','banana' ,'orange' , 'pear']

// delete
getelement = array.splice(0,1);
console.log(getelement); //['apple']
console.log(array); //['banana' ,'orange' , 'pear']
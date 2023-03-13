
// 6. Sime(): Itera el array y retirna un booleano si como minimo uno d elos elementos presentes en el array pasa una condicion determinada. recibe un callback que se encarga de preguntar aquello que queremos dentro del array

const array = [1,2,3,4,5,6,7];

// los elementos son mayores que 4

const isGreaterThanFour = array.some(el => el > 4)
console.log(isGreaterThanFour);

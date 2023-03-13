// 7. every(): Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberan pasar la condicion dada.

const array = [1,2,3,4,5,6,7,8,9];

const isGreatherThanFour = array.every(el => el > 4);
console.log(isGreatherThanFour); // false

const isLessThanTen = array.every(el => el < 10);
console.log(isLessThanTen); //true

// 8. concat(): Se utiliza para unir dos o mas arrays. Este metodo no cambia los array existentes, sino que devuelve un nuevo array

const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

const resultArray = array1.concat(array2);
console.log(resultArray);

// podria destructurarlo tambien
console.log([...array1 , ...array2]);
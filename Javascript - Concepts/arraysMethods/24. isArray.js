// 24. isArray(): Determina si el valor pasado es unn array.

const array = [1,2,3,4];

console.log(Array.isArray(array));
console.log(Array.isArray({nombre : 'Mike'}));
console.log(Array.isArray('apple'));
console.log(Array.isArray(undefined));
// 2. Filter(): Recorre el array y retorna un nuevo array con aquellos elementos que pase una determinada condicion

// const arrayResult = array.map((el, index, array) => {})

array = [1,2,3,4,5];

arrayResult = array.filter(el => el%2 ===0)
console.log(arrayResult);

console.log(`******************************`);
array.filter((el, index, array)=>{
    console.log(index);
    console.log(el);
    console.log(el % 2 === 0);
    // console.log(array);
    console.log(`******************************`);
})

console.log(array.filter(el => el %2 === 0));

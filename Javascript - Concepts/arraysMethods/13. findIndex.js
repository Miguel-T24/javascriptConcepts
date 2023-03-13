// 13. findIndex(): Retorna el indice del primer elemento de un array que cumpla con la funcion de prueba proporcionada. En caso contrario devuelve -1.

const array = ['steve' , 'bruce', 'tony','chris']
const resultArray = array.findIndex(el => el === 'bruce')

console.log(resultArray); //1
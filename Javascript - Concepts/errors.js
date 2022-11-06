'use strict'

try{
    console.log(`En el try se agrega el codigo a evaluar`);
    noExiste;
    console.log(`Segundo mensaje de try`);
    
}catch(error){
    console.log(`Catch, captura cualquier error surgido o lanzado en el try`);
}finally{
    console.log(`El bloque finally se ejecutara siempre al final de un bloque try-catch`);
}


try{
    let numero = 'a';
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un numero");        
    }
    console.log(numero + numero);
}catch(error){
    console.log(`Se produjo el siguiente error ` + error);
}

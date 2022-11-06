// Varibale
 const PI = 3.14

// interface
 interface Person{
    id: number;
    name: string;
}

// function
 function generateRandomNumber(){
    return Math.floor(Math.random() *100);
}

// Otra forma de exportar 
export {PI , Person, generateRandomNumber}
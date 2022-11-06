import {PI, Person, generateRandomNumber} from './myModules';
import {PI as myPI} from './myModules';
// import * as myCode from "./myModules" //En este caso deberia llamarle a todo mycode.  por ejemplo mycode.Person, mycode.PI, etc.

console.log(myPI);

const user:Person = {
    id : 1,
    name: "Miguel"
}

console.log(user);

console.log(generateRandomNumber());


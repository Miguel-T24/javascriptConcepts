"use strict";
class Person {
    constructor() {
        this.zone = "caribean";
        this.city = "Bocas del Toro";
        this.country = "PTY";
        this.greet();
    }
    greet() {
        console.log(`Hello World ${this.country}`);
    }
}
class Employee extends Person {
    // Atributos
    // private id!: number;
    // private name!:string;
    // private dept!:string;
    // Metodos
    constructor(id, name, dept) {
        // this.id = id;
        // this.name = name;
        // this.dept = dept;
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.id} ${this.name} ${this.dept} ${this.city}`);
    }
}
const emp = new Employee(1, "Miguel", "Ventas");
// Access Comntrol keyword
// Public: acceso a todos
// Private: tiene acceso solo a la clase
// Protected: Tiene acceso solo a la herencia

class Person{
    public zone : string = "caribean"
    protected city : string = "Bocas del Toro";
    private country : string = "PTY"
    constructor(){
        this.greet()
    }

    greet(): void{
    console.log(`Hello World ${this.country}`);
    }
}

class Employee extends Person{
    // Atributos
    // private id!: number;
    // private name!:string;
    // private dept!:string;

    // Metodos
    constructor(private readonly id:number, private name:string, private dept: string){
        // this.id = id;
        // this.name = name;
        // this.dept = dept;
        super();
        this.showInfo()
    }

    private showInfo() : void{
        console.log(`${this.id} ${this.name} ${this.dept} ${this.city}`);
    }

}

const emp = new Employee(1, "Miguel", "Ventas");

// Access Comntrol keyword
// Public: acceso a todos
// Private: tiene acceso solo a la clase
// Protected: Tiene acceso solo a la herencia


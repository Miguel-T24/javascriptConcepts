interface Person{
    id: number;
    name: string;
}

class People{
    private items: Person[] = []

    addItem(newItem:Person): void{
        this.items.push(newItem);   
    }

    getItems():void{
        console.log(`List of items` , JSON.stringify(this.items));
    }

    getNames():string[]{
        return this.items.map((item) => item.name);
    }

    getItemById(id:number):Person | undefined {
        return this.items.find((item: Person) => item.id === id);
    }

}

const personCollection = new People();
const newData = {
    id: 1,
    name: "Miguel"
}

personCollection.addItem(newData);

personCollection.getItems();
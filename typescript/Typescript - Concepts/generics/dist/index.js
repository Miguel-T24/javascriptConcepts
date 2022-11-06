"use strict";
class People {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const personCollection = new People();
const newData = {
    id: 1,
    name: "Miguel"
};
personCollection.addItem(newData);
personCollection.getItems();

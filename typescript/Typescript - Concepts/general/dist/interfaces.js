"use strict";
// Interfaces
console.log("Interfaces");
const book = {
    id: 1,
    title: 'My title',
    author: "Miguel"
};
const books = [];
function getBook() {
    return { id: 1, title: "My Title", author: "Miguel" };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: 'My Title',
    author: "Miguel",
    coAuthor: "Antonio"
};
createBook(newBook);

// Interfaces
console.log("Interfaces");

// Diferencias entre las interfaces y las clases

// Interfaces:
// solo existen en tiempos de compilación
// Solo se usan para verificación de tipos

// Clases
// Existen en tiempo de compilación y durante el tiempo de ejecución
// Podemos inicializar propiedades e implementar métodos.

// Interfaces
interface Book{
    id : number;
    title: string;
    author: string;
    coAuthor?: string
}

const book:Book = {
    id:1,
    title: 'My title',
    author: "Miguel"
};

const books:Book[] = [];

function getBook():Book{
    return {id:1, title: "My Title", author: "Miguel"};
}

const myBook = getBook();

function createBook(book:Book):Book{
    return book;
}

const newBook: Book = {
    id : 1,
    title: 'My Title',
    author:"Miguel",
    coAuthor:"Antonio"
}

createBook(newBook);
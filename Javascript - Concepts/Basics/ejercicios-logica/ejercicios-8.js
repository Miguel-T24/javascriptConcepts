'use strict'

/* 1. Prgrama una clase llamada pelicula
    La clase recibira un objeto al momento de instanciarse con los siguientes datos: IDE de la pelicula en IMBD, titulo, director, año de estreno, pais, o paises de origen, generos y calificacion IMBD

    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los dos primeros sean letra y los 7 restantes numeros
    - Valida que el tiutlo no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres
    - valida que el año de estreno sea un numero entero de 4 digitos.
    - Valida que el pais o paises sea introducidos en forma de arreglo
    - Valida que los generos sean introducidos en forma de arreglo.
    - Valida que los generos introducidos esten dentro de los generos aceptados
    - Crea un metodo estatico que devuelva los generos aceptados.
    - Valida que la calificacion sea un numero entre 0 y 10 pudiendo ser decimal de una posicion.
    - Crea un metodo que devuelva toda la ficha tecnica de la pelicula.
    - A partir de un arreglo con la informacion de 3 peliculas genera 3 instancia de la clase de dorma automatizada e imprime la ficha tecnica de cada pelicula.


    * Generos Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western 

*/

class Pelicula{
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News, Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western" ]
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }

    // Metodos Genericos
    validarCadenas(propiedad, valor){
         if(!valor) return console.error(`${propiedad} "${valor}" ingresado esta vacio`);
         if(typeof valor!== "string") return console.error(`${propiedad} "${valor} no es una cadena de texto"`);
         return true;
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.legnth > longitud)  return console.error(`${propiedad} "${valor}" excede le numero de caracteres permitidos (${longitud})`);

        return true;
    }

    validarNumero(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" no es un numero`);

        return true
    }

    validarArreglo(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado no es un arreglo`);
        if(valor.length === 0 ) return console.error(`${propiedad} "${valor}" no tiene datos`);
        for(let cadena of valor){
            if(typeof cadena !== "string") return console.error(`El valor "${valor}" no es cadena de texto`);
        }
        return true;
    }

    // Metodos especificos
    validarIMDB(id){
        if(this.validarCadenas("IMDB id" , id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`IMDB id "${id} no es valid, debe tener 9 caracteres, los dos primeros letras minusculas, los 7 restantes numeros"`);  
        }
    }

    validarTitulo(titulo){
        if(this.validarCadenas("Título" , titulo))
            this.validarLongitudCadena("Título", titulo, 100);
    }
    
    validarDirector(director){
        if(this.validarCadenas("Director" , director))
            this.validarLongitudCadena("Director", director, 50);
    }

    validarEstreno(estreno){
        if(this.validarNumero("Año de Estreno", estreno))
            if(!(/^([0-9]){4}$/.test(estreno))) return console.error(`Año de Estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`);
    }

    validarPais(pais){
        this.validarArreglo("Pais" , pais);
    }

    validarGeneros(generos){
        if(this.validarArreglo("Generos" , generos)){
            for(let genero of generos){
                // console.log(genero, Pelicula.listaGeneros.includes(genero));
                if((!Pelicula.listaGeneros.includes(genero))){
                    console.error(`Genero(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion", calificacion))
            return (calificacion < 0 || calificacion > 10)
            ?console.log("La calificacion tiene que estar entre un rango de 0 y 10")
            :this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica(){
        console.info(`Ficha Tecnica: \nTitulo:"${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: "${this.pais}"\nGeneros: "${this.generos.join(", ")}"\nCalificacion: "${this.calificacion}"\nIMDB ID: "${this.id}"`);
    }

}

Pelicula.generosAceptados();

const peli = new Pelicula({
    id: "tt4567123",
    titulo: "Nito Ataca",
    director: "Mr Fox",
    estreno: 2022,
    pais: ["Panama"],
    generos: ["Horror", "Comedy"],
    calificacion: 8.78
});

peli.fichaTecnica();
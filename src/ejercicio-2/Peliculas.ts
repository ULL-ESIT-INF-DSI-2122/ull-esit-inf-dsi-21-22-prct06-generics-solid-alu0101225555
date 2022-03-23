/**
 * Clase 'Pelicula' contiene los atributos necesarios para definir una película.
 */
export class Pelicula {
    constructor(protected titulo: string, protected anyo: number, protected director: string){}

    getTitulo() {
        return this.titulo;
    }

    getAnyo() {
        return this.anyo;
    }

    getDirector() {
        return this.director;
    }
}
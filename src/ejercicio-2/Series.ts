export class Serie {
    constructor(protected titulo: string, protected anyo: number, protected director: string, protected actor: string){}

    getTitulo() {
        return this.titulo;
    }

    getAnyo() {
        return this.anyo;
    }

    getDirector() {
        return this.director;
    }

    getActor() {
        return this.actor;
    }

    setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    setAnyo(anyo: number) {
        this.anyo = anyo;
    }

    setDirector(director: string) {
        this.director = director;
    }

    setActor(actor: string) {
        this.actor = actor;
    }
}
import { Documental } from "./Documental";
import { BasicStreamableCollection } from "./BasicStreamableCollection";


export class SubDocumental<T extends Documental> extends BasicStreamableCollection<T> {
    constructor(public coleccion: T[]) {
        super (coleccion);
    }

    //tenemos que implementar los métodos abstractos de la clase padre aquí
    busquedaTitulo(titulo: string) :string {
        let array_encontrados: T[] = [];
        this.coleccion.forEach((Pelicula) => {
            let tit: string = Pelicula.getTitulo();
            if(tit.search(titulo) != 1) {
                array_encontrados.push(Pelicula);
            }
        });
        //this.printFiltro(array_encontrados);
        return array_encontrados[0].getTitulo();
    };

    busquedaAnyo(any: number) : number {
        let array_encontrados: T[] = [];
        this.coleccion.forEach((pelicula) => {
            let anyo: number = pelicula.getAnyo();
            if(any == anyo) {
                array_encontrados.push(pelicula)
            }
        });
        //this.printColleccion(array_encontrados);
        return array_encontrados[0].getAnyo();
    }

    busquedaDirector(direc: string): string {
        let array: T[] = [];
        this.coleccion.forEach((pelicula) => {
            let director: string = pelicula.getDirector();
            if (director.search(direc) != 1) {
                array.push(pelicula);
            }
        })
        return array[0].getDirector();
    }

    busquedaActor(act: string): string {
        let array: T[] = [];
        this.coleccion.forEach((pelicula) => {
            let actor: string = pelicula.getActor();
            if (actor.search(act) != 1) {
                array.push(pelicula);
            }
        })
        return array[0].getActor();
    }

    /**
     * Método para imprimir el título de la colección filtrada
     * @param colecc vector de la clase peliculas 
     * @returns primera pelicula que sale filtrada 
     */
    printFiltro(colecc: T[]): string {
        console.log(`Coleccioón filtrada: ${colecc}`);
        return colecc[0].getTitulo();
    }

    /**
     * Método para imprimir el título de la colección
     * @returns título de la primera película 
     */
    printColeccion(): string {
        console.log(`Colección: ${this.coleccion}`);
        return this.coleccion[0].getTitulo();
    }
}
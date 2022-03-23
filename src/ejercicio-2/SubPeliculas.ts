/**
 * Clase hija de película que modela una colección de películas.
 */

import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Pelicula } from "./Peliculas";

export class SubPeliculas<T extends Pelicula> extends BasicStreamableCollection<T> {
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
        })
    };
}
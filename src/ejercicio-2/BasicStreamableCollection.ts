import {Streamable} from './Streamable';
import {Printeable} from './Printeable';

/**
 * Clase abstracta que implementa las interfaces Stremeable y Printeable.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>, Printeable<T> {
    constructor (public coleccion: T[]){} //ojo con no declarar los tipos de datos explicitamente

    abstract busquedaTitulo(titulo: string): string; //hay q anotar el tipo de datos retornado explicitamente
    abstract busquedaAnyo(anyo: number): number;
    abstract busquedaActor(actor: string): string;
    abstract busquedaDirector(director: string): string;

    abstract printColeccion(): string;
    abstract printFiltro(coleccion: T[]): string;
}
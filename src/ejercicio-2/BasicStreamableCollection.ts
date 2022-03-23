import {Streamable} from './Streamable';

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor (public coleccion: T[]){} //ojo con no declarar los tipos de datos explicitamente

    abstract busquedaTitulo(titulo: string): string; //hay q anotar el tipo de datos retornado explicitamente
    abstract busquedaAnyo(anyo: number): number;
}
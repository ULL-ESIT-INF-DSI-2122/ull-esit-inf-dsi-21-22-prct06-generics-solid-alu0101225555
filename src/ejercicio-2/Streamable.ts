/**
 * Ejercicio 2
 */

export interface Streamable<T> {
    coleccion: T[];
    busquedaTitulo(titulo: string): string;
    busquedaAnyo(anyo: number): number;
}

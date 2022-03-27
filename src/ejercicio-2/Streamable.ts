/**
 * Ejercicio 2
 * Interfaz genércia Streamable que define los métodos comunes de las clases Series, Peliculas y Documentales
 */

export interface Streamable<T> {
    coleccion: T[];
    
    busquedaTitulo(titulo: string): string;
    busquedaAnyo(anyo: number): number;
    busquedaActor(actor: string): string;
    busquedaDirector(director: string): string;
}

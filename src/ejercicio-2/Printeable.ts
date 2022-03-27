/**
 * Interfaz genérica Printeable para poder imprimir
 */
export interface Printeable<T> {
    coleccion: T[];

    printFiltro(coleccion: T[]): string;
    printColeccion(): string;
}
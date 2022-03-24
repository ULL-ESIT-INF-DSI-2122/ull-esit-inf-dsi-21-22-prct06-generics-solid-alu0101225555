import {Arithmeticable} from './Arithmeticable';

export abstract class ArithmeticableCollection<T> implements Arithmeticable<T> {
    constructor(protected items: T[]) {
    }

    /**
     * Método para añadir un nº a la colección
     * @param n nº para añadir a la colección 
     */
    addArithmeticable(n: T) {
        this.items.push(n);
    }

    /**
     * Método para obtener un elemento de la colección
     * @param i índice de la figura
     * @returns valor de ese índice
     */
    getArithmeticable(i: number) {
        return this.items[i];
    }

    /**
     * Método para obtener el tamaño de la colección
     * @returns longitud de la colección
     */
    getNumberOfArithmeticables() {
        return this.items.length;
    }

    abstract add(n1: number, n2:number): number;
    abstract substract(n1: number, n2:number): number;
    abstract multiply(n1: number, n2:number): number;
    abstract divide(n1: number, n2:number): number;

}
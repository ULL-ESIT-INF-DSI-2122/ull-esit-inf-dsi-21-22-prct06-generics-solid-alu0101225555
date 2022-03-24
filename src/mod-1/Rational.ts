import {Arithmeticable} from './Arithmeticable';
import {ArrayTwo} from './ArrayTwo';

export class Rational implements Arithmeticable<ArrayTwo> {
    constructor(private items: ArrayTwo[]) {}

    /**
     * Método para añadir un nº a la colección
     * @param n nº para añadir a la colección 
     */
     addArithmeticable(n: ArrayTwo) {
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

    /**
     * Método para sumar 2 racionales
     * @param n1 
     * @param n2 
     * @returns devuelve la suma
     */
    add(n1:number, n2:number) {
        return n1 + n2;
    }

    /**
     * Método para restar 2 racionales
     * @param n1 
     * @param n2 
     * @returns devuelve la resta
     */
    substract(n1:number, n2:number) {
        return n2 - n1;
    }

    /**
     * Método para multiplicar 2 racionales
     * @param n1 
     * @param n2 
     * @returns devuelve la multiplicación
     */
    multiply(n1: number, n2:number) {
        return n1 * n2;
    }

    /**
     * Método para dividir 2 racionales
     * @param n1 
     * @param n2 
     * @returns devuelve la división
     */
    divide(n1: number, n2:number) {
        return n1 / n2;
    }

    /**
     * Método para imprimir por pantalla
     */
    print() {
        console.log(`Resultado suma: ${this.add}, resultado resta: ${this.substract}, resultado multiplicación: ${this.multiply}, resultado división: ${this.divide}`);
    }

}
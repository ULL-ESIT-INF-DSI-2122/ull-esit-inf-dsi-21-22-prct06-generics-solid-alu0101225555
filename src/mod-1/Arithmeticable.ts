/**
 * Interfaz genérica Arithmeticable que contiene los métodos add, substract, divide y multiply.
*/

export interface Arithmeticable<T> {
    //
    addArithmeticable(n: T): void;
    getArithmeticable(i: number): T;
    getNumberOfArithmeticables(): number;

    add(n1: number, n2:number): number;
    substract(n1: number, n2:number): number;
    multiply(n1: number, n2:number): number;
    divide(n1: number, n2:number): number;
}
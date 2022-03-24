export abstract class ArrayTwo {
    constructor(protected n1: number, protected n2: number) {}

    getN1() {
        return this.n1;
    }

    getN2() {
        return this.n2;
    }

    abstract print(): void;
}
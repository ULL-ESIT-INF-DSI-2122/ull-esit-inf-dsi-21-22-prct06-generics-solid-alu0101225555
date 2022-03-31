
/**
 * Tipo de datos Imperial
 */
export type ImperialL = {
    pulgadas: number;
    pies: number;
    millas: number;
}

/**
 * Clase ImperialLenght que para el sistema métrico imperial
 */
export class ImperialLenght {
    constructor(private imperial: ImperialL = {
        pulgadas: 1, pies: 1, millas: 1}) {
    }

    getSpecificDataImperial(): ImperialL {
        return this.imperial;
    }

    /*getCmPulgadas(): number {
        
    }*/
}
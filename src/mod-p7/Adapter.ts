import { ImperialLenght } from "./ImperialLenght";
import {MetricLenght} from "./MetricLeght";
import {ImperialL} from "./ImperialLenght";

/**
 * Clase adaptador para poder usar 2 clases que en principio no son compatibles
 */
export class AdapterL extends MetricLenght {
    constructor(centimetros: number, metros: number, km: number, private service: ImperialLenght) {
        super(centimetros, metros, km);
    }

    getData() {
        return `${this.service.getSpecificDataImperial().millas * this.getKm()},` + 
                `${this.service.getSpecificDataImperial().pies * this.getMetros()},` + 
                `${this.service.getSpecificDataImperial().pulgadas * this.getCentimetros()}`;
    }

}
//SystemA

/**
 * Clase MetricLenght para el sistema métrico, recibe los parámetros numéricos cm, m y km
 */
export class MetricLenght {
    constructor(private centimetros: number, private metros: number, private km: number) {
    }

    getCentimetros(): number {
        return this.centimetros;
    }

    getMetros(): number {
        return this.metros;
    }

    getKm(): number {
        return this.km;
    }
}
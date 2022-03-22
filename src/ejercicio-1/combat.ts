import {Pokemon} from './pokemon';

/**
 * Clase usada para simular un combate
 */
export class Combat {

    constructor( private pokA: Pokemon, private pokB: Pokemon) {
        this.pokA = pokA;
        this.pokB = pokB;
    };

    /**
     * Método para calcular el daño entre 2 pokemons
     * @param tipoA tipo del primer pokemon
     * @param tipoB tipo del segundo pokemon
     * @param ataqA ataque del pokemon A
     * @param defB defensa del pokemon B
     * @returns devuelve el daño final 
     */
    daños(tipoA: string, tipoB: string, ataqA: number, defB: number): number {
        let super_efectivo = 2; //= 50 * (ataqA / defB) * 2;
        let neutral = 1; //= 50 * (ataqA / defB);
        let poco_efectivo = 0.5//: number = 50 * (ataqA / defB) * 0.5;
        let efectividad = 0;
        let dañoF = 0;

        if (tipoA == tipoB) {
            efectividad = poco_efectivo;
        }

        if (tipoA == 'fuego') {
            if (tipoB == 'agua')
                efectividad = poco_efectivo
            if (tipoB == 'hierba')
                efectividad = super_efectivo
            if (tipoB == 'electrico')
                 efectividad = neutral
        }

        if (tipoA == 'agua') {
            if (tipoB == 'fuego')
               efectividad = super_efectivo
            if (tipoB == 'hierba')
               efectividad = poco_efectivo
            if (tipoB == 'electrico')
               efectividad = poco_efectivo        
        }

        if (tipoA == 'hierba') {
            if (tipoB == 'fuego')
               efectividad = poco_efectivo
            if (tipoB == 'agua')
               efectividad = super_efectivo
            if (tipoB == 'electrico')
               efectividad = neutral        
        }

        if (tipoA == 'electrico') {
            if (tipoB == 'fuego')
               efectividad = neutral
            if (tipoB == 'agua')
               efectividad = super_efectivo 
            if (tipoB == 'hierba')
                efectividad = neutral        
        }

        dañoF = 50 * (ataqA / defB) * efectividad;
        return parseFloat(dañoF.toFixed(2));
    }

    /**
     * Método para comenzar una batalla entre 2 pokemons
     * @returns pokemon ganador
     */
    start() {
        //let salud_acabada: boolean = false;
        let turno: number = 1;
        let ganador: string = "";

        console.log(`Combate entre ${this.pokA.getNombre()} con ${this.pokA.getHp()} puntos VS ${this.pokB.getNombre()} con ${this.pokB.getHp()} puntos`);

        while((this.pokA.getHp() > 0) || (this.pokB.getHp() > 0)) {
            let daño: number = 0;

            console.log(`Truno: ${turno}`);

            if(turno % 2 != 0) {
                daño = this.daños(this.pokA.getTipo(), this.pokB.getTipo(), this.pokA.getAtaque(), this.pokB.getDefensa());
                this.pokB.setHP(this.pokB.getHp() - daño);
                console.log(`Pokemon ${this.pokA.getNombre()} le hizo daño al pokemon ${this.pokB.getNombre()}`);
                console.log(`HP pokemon ${this.pokA.getNombre()} = ${this.pokA.getHp()}`);
                console.log(`HP pokemon ${this.pokB.getNombre()} = ${this.pokB.getHp()}`);
            }else {
                daño = this.daños(this.pokB.getTipo(), this.pokA.getTipo(), this.pokB.getAtaque(), this.pokA.getDefensa());
                this.pokA.setHP(this.pokA.getHp() - daño);
                console.log(`Pokemon ${this.pokB.getNombre()} le hizo daño al pokemon ${this.pokA.getNombre()}`);
                console.log(`HP pokemon ${this.pokA.getNombre()} = ${this.pokA.getHp()}`);
                console.log(`HP pokemon ${this.pokB.getNombre()} = ${this.pokB.getHp()}`);
            }

            if(this.pokA.getHp() <= 0) {
                ganador = this.pokB.getNombre();
            }else {
                ganador = this.pokA.getNombre();
            }

            turno ++;
        }

        console.log(`Ganador: ${ganador}`);
        return ganador;
    }  
}
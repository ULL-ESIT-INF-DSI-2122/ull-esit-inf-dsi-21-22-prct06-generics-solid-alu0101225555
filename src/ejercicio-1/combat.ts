//import {Pokemon} from './pokemon';
//import {Fighter} from './Fighter';

/**
 * Clase usada para simular un combate
 */
/*
export class Combat <T extends Fighter, U extends Fighter>{

    constructor( private luchA: T, private luchB: U) {
        this.luchA = luchA;
        this.luchB = luchB;
    };

    /**
     * Método para calcular el daño entre 2 pokemons
     * @param tipoA tipo del primer pokemon
     * @param tipoB tipo del segundo pokemon
     * @param ataqA ataque del pokemon A
     * @param defB defensa del pokemon B
     * @returns devuelve el daño final 
     */
   /* daños(tipoA: string, tipoB: string, ataqA: number, defB: number): number {
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
   /* start() {
        //let salud_acabada: boolean = false;
        let turno: number = 1;
        let ganador: string = "";

        console.log(`Combate entre ${this.luchA.getNombre()} con ${this.luchA.getHp()} puntos VS ${this.luchB.getNombre()} con ${this.luchB.getHp()} puntos`);

        while((this.luchA.getHp() > 0) || (this.luchB.getHp() > 0)) {
            let daño: number = 0;

            console.log(`Truno: ${turno}`);

            if(turno % 2 != 0) {
                daño = this.daños(this.luchA.getTipo(), this.luchB.getTipo(), this.luchA.getAtaque(), this.luchB.getDefensa());
                this.luchB.setHp(this.luchB.getHp() - daño);
                console.log(`Pokemon ${this.luchA.getNombre()} le hizo daño al pokemon ${this.luchB.getNombre()}`);
                console.log(`HP pokemon ${this.luchA.getNombre()} = ${this.luchA.getHp()}`);
                console.log(`HP pokemon ${this.luchB.getNombre()} = ${this.luchB.getHp()}`);
            }else {
                daño = this.daños(this.luchB.getTipo(), this.luchA.getTipo(), this.luchB.getAtaque(), this.luchA.getDefensa());
                this.luchA.setHp(this.luchA.getHp() - daño);
                console.log(`Pokemon ${this.luchB.getNombre()} le hizo daño al pokemon ${this.luchA.getNombre()}`);
                console.log(`HP pokemon ${this.luchA.getNombre()} = ${this.luchA.getHp()}`);
                console.log(`HP pokemon ${this.luchB.getNombre()} = ${this.luchB.getHp()}`);
            }

            if(this.luchA.getHp() <= 0) {
                ganador = this.luchB.getNombre();
            }else {
                ganador = this.luchA.getNombre();
            }

            turno ++;
        }

        console.log(`Ganador: ${ganador}`);
        return ganador;
    }  
}*/
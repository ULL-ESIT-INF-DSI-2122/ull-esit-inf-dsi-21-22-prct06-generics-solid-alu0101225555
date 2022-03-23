/**
 * Ejercicio 1 
 * En este fichero se guardará la subclase 'pokemon' con su información, heredada de Fighter
 */

import {Fighter} from "./Fighter";

export class Pokemon extends Fighter {

    /**
     * @param nombre es el nombre del pokemon
     * @param peso es el peso del pokemon
     * @param altura es la altura del pokemon
     * @param tipo es el tipo del pokemon: agua, fuego, hierba o electricidad
     * @param ataque puntos ataque pokemon
     * @param defensa puntos defensa pokemon
     * @param velocidad velocidad pokemon
     * @param hp puntos daño máximo pokemon
     */

    /**
     * Constructor simplificado con todos los atributos heredados de Fighter
     */
    constructor (nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, hp: number) {
        super(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp);
    }

}
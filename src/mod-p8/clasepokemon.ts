import {Pokemon} from "./interfazpokemon";

/**
 * Clase que implementa concretamente un objeto Pokemon
 */
export class CPokemon implements Pokemon {
    constructor (private nombre: string, private peso: number, private altura: number,  private tipo: string, private ataque: number,  private defensa: number,  private velocidad: number,  private hp: number) {}

    /**
     * 
     * @returns nombre del pokemon
     */
     getNombre() { 
        return this.nombre; 
    }

    /**
     * 
     * @returns peso del pokemon
     */
    getPeso() {
        return this.peso;
    }

    /**
     * 
     * @returns altura del pokemon
     */
    getAltura() {
        return this.altura;
    }

    /**
     * 
     * @returns tipo de pokemon
     */
    getTipo() {
        return this.tipo;
    }

    /**
     * 
     * @returns puntos de ataque del pokemon
     */
    getAtaque() {
        return this.ataque;
    }

    /**
     * 
     * @returns puntos de defensa del pokemon
     */
    getDefensa() {
        return this.defensa;
    }

    /**
     * 
     * @returns velocidad del pokemon
     */
    getVelocidad() {
        return this.velocidad;
    }

    /**
     * 
     * @returns puntos daño máximo del pokemon
     */
    getHp() {
        return this.hp;
    }

    /**
     * Método que modifica el valor HP de un pokemon
     * @param hp nuevo valor HP 
     */
    setHP(hp: number) {
        this.hp = hp;
    }    
}
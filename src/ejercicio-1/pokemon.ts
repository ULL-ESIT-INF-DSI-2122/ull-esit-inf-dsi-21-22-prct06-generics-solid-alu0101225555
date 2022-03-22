/**
 * Ejercicio 1 - Pokedex
 * En este fichero se guardará la clase 'pokemon' con su información
 */

export class Pokemon {

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
     * Constructor simplificado con todos los atributos privados
     */
    constructor (private nombre: string, private peso: number, private altura: number,  private tipo: string, private ataque: number,  private defensa: number,  private velocidad: number,  private hp: number) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.hp = hp;
    }

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
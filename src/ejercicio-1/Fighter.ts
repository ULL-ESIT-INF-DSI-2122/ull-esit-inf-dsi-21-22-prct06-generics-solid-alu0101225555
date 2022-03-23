/**
 * Recursos: 
 * https://apuntes.de/typescript/classes-abstract/#gsc.tab=0
 * Superclase Fighter
 */

/**
 * Clase abstracta Fighter, donde ponemos los atributos protegidos para poder acceder desde las subclases (si son privados, son inaccesibles desde subclases)
 */
export abstract class Fighter {
    constructor(protected nombre: string, protected peso: number, protected altura: number, protected tipo: string, protected ataque: number, protected defensa: number, protected velocidad: number, protected hp: number) {
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

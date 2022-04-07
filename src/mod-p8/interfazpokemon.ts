/**
 * Interfaz que declara las funcionalidades de un pokemon
 */
export interface Pokemon {
    getNombre(): string;
    getPeso(): number;
    getAltura(): number;
    getTipo(): string;
    getAtaque(): number;
    getDefensa(): number;
    getVelocidad(): number;
    getHp(): number;
    //setHp(hp: number);
}
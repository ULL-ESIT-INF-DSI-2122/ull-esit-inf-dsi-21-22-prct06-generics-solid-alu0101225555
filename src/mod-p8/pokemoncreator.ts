import {Pokemon} from "./interfazpokemon"; 

/**
 * Clase abstracta con factorymethod que devuelve un objeto Pokemon
 */
export abstract class PokemonsCreator {
    public abstract factoryMethod(): Pokemon;

    /**
     * La lógica realizada en PokemonsCreator retorna 'factorymethod'. Las subclases pueden cambiar indiretamente este método y retornar diferentes objetos Pokemon.
     * @returns 
     */
    public logic(): string {
        const pokemon = this.factoryMethod();
        return `Soy ${pokemon.getNombre()}, ` +
        `peso ${pokemon.getPeso()}, ` +
        `mido ${pokemon.getAltura()}, ` + 
        `soy de tipo ${pokemon.getTipo()}, ` +
        `mis puntos de ataque son: ${pokemon.getAtaque()}, ` +
        `mis puntos de defensa son: ${pokemon.getDefensa()}, ` +
        `mi velocidad es ${pokemon.getVelocidad()}, ` +
        `y mis puntos de salud son: ${pokemon.getHp()}`;
    }
}
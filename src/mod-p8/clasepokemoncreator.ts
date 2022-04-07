import { CPokemon } from './clasepokemon';
import {PokemonsCreator} from './pokemoncreator';
import {Pokemon} from './interfazpokemon';

/**
 * Implementación concreta de la clase PokemonsCreator que retorna un objeto Pokemon siguiendo 'factorymethod'.
 */
export class PokemonCreator extends PokemonsCreator {
    constructor (private name: string, private peso: number, private altura: number,  private tipo: string, private ataque: number,  private defensa: number,  private velocidad: number,  private hp: number) {
        super();
    }

    public factoryMethod(): Pokemon {
        return new CPokemon(this.name, this.peso, this.altura, this.tipo, this.ataque, this.defensa, this.velocidad, this.hp);
    }
}
import { PokemonCreator } from "./clasepokemoncreator";
import { PokemonsCreator } from "./pokemoncreator";

export function clientCode(pokemonsCreator: PokemonsCreator): string {
    //console.log(pokemonsCreator.logic());
    return pokemonsCreator.logic();
    
}

//clientCode(new PokemonCreator("Vulpix", 9.9, 0.6, "fuego", 41, 40, 65, 199))
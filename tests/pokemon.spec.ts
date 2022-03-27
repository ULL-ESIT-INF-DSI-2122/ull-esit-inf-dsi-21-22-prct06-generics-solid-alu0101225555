/*import "mocha";
import {expect} from "chai";
import {Pokemon} from "../src/ejercicio-1/pokemon";
import {Pokedex} from "../src/ejercicio-1/pokedex";
import {Combat} from "../src/ejercicio-1/combat";

describe ('Ejercicio 1 - Pokedex', () => {

    const Vulpix: Pokemon = new Pokemon("Vulpix", 9.9, 0.6, "fuego", 41, 40, 65, 199);
    const Lapras: Pokemon = new Pokemon("Lapras", 220.0, 2.5, "agua", 85, 80, 60, 295);
    const Pikachu: Pokemon = new Pokemon("Pikachu",6.0, 0.4, "electrico", 55, 40, 90, 229);

    const VectorPokemons: Pokedex = new Pokedex ([]);
    VectorPokemons.setPokemon(Vulpix);
    VectorPokemons.setPokemon(Pikachu);

    const combate: Combat = new Combat(Vulpix, Lapras);

    describe ('Expectativas clase Pokemon', () => {
        it('Atributo: nombre', () => {
            expect(Vulpix.getNombre()).to.be.equal('Vulpix');
        });

        it('Atributo: altura', () => {
            expect(Vulpix.getAltura()).to.be.equal(0.6);
        });

        it('Atributo: peso', () => {
            expect(Vulpix.getPeso()).to.be.equal(9.9);
        });

        it('Atributo: tipo', () => {
            expect(Vulpix.getTipo()).to.be.equal('fuego');
        });

        it('Atributo: ataque', () => {
            expect(Vulpix.getAtaque()).to.be.equal(41);
        });

        it('Atributo: defensa', () => {
            expect(Vulpix.getDefensa()).to.be.equal(40);
        });

        it('Atributo: velocidad', () => {
            expect(Vulpix.getVelocidad()).to.be.equal(65);
        });

        it('Atributo: HP', () => {
            expect(Vulpix.getHp()).to.be.equal(199);
        });
        
    });

    describe ('Expectativas clase Pokedex', () => { 
        it('Método: findPokemon encontrado', () => {
            expect(VectorPokemons.findPokemon(Vulpix)).to.be.equal(true);
        });

        it('Vector pokemons guardados', () => {
            console.log(VectorPokemons);
        });
    });

    describe ('Expectativas clase Combat', () => { 
        it('Llamada a la función combate funciona -> Ganador: Lapras', () => {
            expect(combate.start()).not.to.be.equal(null);
        });
    });

});*/
import "mocha";
import {expect} from "chai";
import {PokemonCreator} from '../src/mod-p8/clasepokemoncreator';
import { PokemonsCreator } from '../src/mod-p8/pokemoncreator';
import {clientCode} from '../src/mod-p8/clientCode';


describe ('Ejercicio P8 mod - Factory Method Pokemon', () => {

    const Vulpix = new PokemonCreator("Vulpix", 9.9, 0.6, "fuego", 41, 40, 65, 199);
    const Lapras = new PokemonCreator("Lapras", 220.0, 2.5, "agua", 85, 80, 60, 295);
    const Pikachu = new PokemonCreator("Pikachu",6.0, 0.4, "electrico", 55, 40, 90, 229);

    describe ('Expectativas', () => {

        it('Pokemon Vulpix', () => {
            expect(clientCode(Vulpix)).to.be.equal('Soy Vulpix, peso 9.9, mido 0.6, soy de tipo fuego, mis puntos de ataque son: 41, mis puntos de defensa son: 40, mi velocidad es 65, y mis puntos de salud son: 199');
            //expect()).to.be.equal('Soy Vulpix, peso 9.9, mido 0.6, soy de tipo fuego, mis puntos de ataque son: 41, mis puntos de defensa son: 40, mi velocidad es 65, y mis puntos de salud son: 199');
        });

        it('Pokemon Lapras', () => {
            expect(clientCode(Lapras)).to.be.eq('Soy Lapras, peso 220, mido 2.5, soy de tipo agua, mis puntos de ataque son: 85, mis puntos de defensa son: 80, mi velocidad es 60, y mis puntos de salud son: 295');
        });

        it('Pokemon Pikachu', () => {
            expect(clientCode(Pikachu)).to.be.eq('Soy Pikachu, peso 6, mido 0.4, soy de tipo electrico, mis puntos de ataque son: 55, mis puntos de defensa son: 40, mi velocidad es 90, y mis puntos de salud son: 229');
        });
    });
})
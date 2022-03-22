"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const pokemon_1 = require("../src/ejercicio-1/pokemon");
describe('Ejercicio 1 - Pokedex', () => {
    const Vulpix = new pokemon_1.Pokemon("Vulpix", 9.9, 0.6, "fuego", 41, 40, 65, 199);
    const Lapras = new pokemon_1.Pokemon("Lapras", 220.0, 2.5, "agua", 85, 80, 60, 295);
    describe('Expectativas clase Pokemon', () => {
        it('Atributo: nombre', () => {
            (0, chai_1.expect)(Vulpix.getNombre()).to.be.equal('Vulpix');
        });
        it('Atributo: altura', () => {
            (0, chai_1.expect)(Vulpix.getAltura()).to.be.equal(0.6);
        });
        it('Atributo: peso', () => {
            (0, chai_1.expect)(Vulpix.getPeso()).to.be.equal(9.9);
        });
        it('Atributo: tipo', () => {
            (0, chai_1.expect)(Vulpix.getTipo()).to.be.equal('fuego');
        });
        it('Atributo: ataque', () => {
            (0, chai_1.expect)(Vulpix.getAtaque()).to.be.equal(41);
        });
        it('Atributo: defensa', () => {
            (0, chai_1.expect)(Vulpix.getDefensa()).to.be.equal(40);
        });
        it('Atributo: velocidad', () => {
            (0, chai_1.expect)(Vulpix.getVelocidad()).to.be.equal(65);
        });
        it('Atributo: HP', () => {
            (0, chai_1.expect)(Vulpix.getHp()).to.be.equal(199);
        });
    });
});

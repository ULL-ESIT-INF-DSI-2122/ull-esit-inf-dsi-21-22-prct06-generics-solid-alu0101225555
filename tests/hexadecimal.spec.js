"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const hexadecimal_1 = require("../src/mod-1/hexadecimal");
describe('Modificación 1 - Hexadecimal', () => {
    const myHexNumber = new hexadecimal_1.Hexadecimal(38);
    let myFirstHexValue = new hexadecimal_1.Hexadecimal(23);
    let mySecondHexValue = new hexadecimal_1.Hexadecimal(15);
    it('Expectativa creación clase Hexadecimal no vacía', () => {
        (0, chai_1.expect)(myHexNumber).not.to.be.equal(null);
    });
    it('Atributo: numero', () => {
        (0, chai_1.expect)(myHexNumber.getNumber()).to.be.equal(38);
    });
    it('Pasar a cadena hexadecimal un número entero', () => {
        (0, chai_1.expect)(myHexNumber.toString()).to.be.equal("26");
    });
    it('Retornar el valor', () => {
        (0, chai_1.expect)(myHexNumber.valueOf()).to.be.equal(38);
    });
    it('Suma - valor entero', () => {
        (0, chai_1.expect)(myFirstHexValue.add(mySecondHexValue).valueOf()).to.be.equal(38);
    });
    it('Resta - valor entero', () => {
        (0, chai_1.expect)(myFirstHexValue.substract(mySecondHexValue).valueOf()).to.be.equal(8);
    });
});

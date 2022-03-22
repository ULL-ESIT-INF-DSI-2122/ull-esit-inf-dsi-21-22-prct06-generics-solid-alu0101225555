import "mocha";
import {expect} from "chai";
import {Hexadecimal} from "../src/mod-1/hexadecimal";

describe ('Modificación 1 - Hexadecimal', () => {

    const myHexNumber: Hexadecimal = new Hexadecimal(38);
    let myFirstHexValue: Hexadecimal = new Hexadecimal(23);
    let mySecondHexValue: Hexadecimal = new Hexadecimal(15);

    it('Expectativa creación clase Hexadecimal no vacía', () => {
            expect(myHexNumber).not.to.be.equal(null);
    });

    it('Atributo: numero', () => {
        expect(myHexNumber.getNumber()).to.be.equal(38);
    });

    it('Pasar a cadena hexadecimal un número entero', () => {
            expect(myHexNumber.toString()).to.be.equal("26");
    });

    it('Retornar el valor', () => {
        expect(myHexNumber.valueOf()).to.be.equal(38);
    });

    it('Suma - valor entero', () => {
        expect(myFirstHexValue.add(mySecondHexValue).valueOf()).to.be.equal(38);
    });

    it('Resta - valor entero', () => {
        expect(myFirstHexValue.substract(mySecondHexValue).valueOf()).to.be.equal(8);
    });

    /*it('Suma - valor hex', () => {
        expect(myFirstHexValue.add(mySecondHexValue).toString()).to.be.equal("26");
    });*/

    it('Pasar cadena a número entero', () => {
            expect(myHexNumber.parse()).to.be.equal(38);
    });

}); 
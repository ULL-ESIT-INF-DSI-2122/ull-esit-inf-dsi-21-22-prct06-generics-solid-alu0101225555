import "mocha";
import {expect} from "chai";
import {Streamable} from "../src/ejercicio-2/Streamable";
import {Pelicula} from "../src/ejercicio-2/Peliculas";
import {BasicStreamableCollection} from "../src/ejercicio-2/BasicStreamableCollection";

describe ('Ejercicio 2 - DSIflix', () => {

    let Dune = new Pelicula("Dune", 2021, "Denis Villeneuve")

    describe ('Expectativas clase Pelicula', () => {

        it('La pelicula Dune pertenece a la clase Pelicula', () => {
            expect(Dune).to.be.instanceOf(Pelicula);
        });
    });
    
});

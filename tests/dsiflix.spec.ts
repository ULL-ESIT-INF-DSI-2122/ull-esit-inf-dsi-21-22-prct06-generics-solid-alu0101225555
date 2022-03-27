import "mocha";
import {expect} from "chai";
import {Streamable} from "../src/ejercicio-2/Streamable";
import {Pelicula} from "../src/ejercicio-2/Peliculas";
import {BasicStreamableCollection} from "../src/ejercicio-2/BasicStreamableCollection";
import {SubPeliculas} from "../src/ejercicio-2/SubPeliculas";
import {Serie} from "../src/ejercicio-2/Series";
import {SubSeriess} from "../src/ejercicio-2/SubSeries";
import {Documental} from "../src/ejercicio-2/Documental";
import  {SubDocumental} from "../src/ejercicio-2/SubDocumental";

describe ('Ejercicio 2 - DSIflix', () => {

    let Dune = new Pelicula("Dune", 2021, "Denis Villeneuve", "Timothee");
    let Batman = new Pelicula("The Batman", 2022, "Matt Reeves", "Robert Pattison");
    let Harry = new Pelicula("Harry Potter y la piedra filosofal", 2001, "Chris Columbus", "Daniel Radcliffe");
    let coleccion = [Dune, Batman, Harry];
    let coleccion_peliculas = new SubPeliculas(coleccion);

    describe ('Expectativas Pelicula', () => {

        it('La pelicula Dune pertenece a la clase Pelicula', () => {
            expect(Dune).to.be.instanceOf(Pelicula);
        });

        it('Busqueda título - Dune', () => {
            expect(coleccion_peliculas.busquedaTitulo("Dune")).to.be.eq("Dune");
        });

        it('Busqueda año - 2001', () => {
            expect(coleccion_peliculas.busquedaAnyo(2001)).to.be.eq(2001);
        });

        it('Busqueda director - Denis', () => {
            expect(coleccion_peliculas.busquedaDirector("Denis Villeneuve")).to.be.eq("Denis Villeneuve");
        });

        it('Busqueda actor - Timothee', () => {
            expect(coleccion_peliculas.busquedaActor("Timothee")).to.be.eq("Timothee");
        });
    });

    let Archivo81 = new Serie("Archivo 81", 2022, "Rebecca Sonneshine", "Dina");
    let Loki = new Serie("Loki", 2022, "Kate Herron", "Tom Hiddleston");
    let coleccionS = [Archivo81, Loki];
    let coleccion_series = new SubSeriess(coleccionS);

    describe ('Expectativas Series', () => {

        it('La serie Archivo 81 pertenece a la clase Serie', () => {
            expect(Archivo81).to.be.instanceOf(Serie);
        });

        it('Busqueda título - Archivo81', () => {
            expect(coleccion_series.busquedaTitulo("Archivo 81")).to.be.eq("Archivo 81");
        });

        it('Busqueda año - 2022', () => {
            expect(coleccion_series.busquedaAnyo(2022)).to.be.eq(2022);
        });

        it('Busqueda director - Rebecca Sonneshine', () => {
            expect(coleccion_series.busquedaDirector("Rebecca Sonneshine")).to.be.eq("Rebecca Sonneshine");
        });

        it('Busqueda actor - Dina', () => {
            expect(coleccion_series.busquedaActor("Dina")).to.be.eq("Dina");
        });
    });

    let Timador = new Documental("Timador de Tinder", 2022, "Felicity", "Cecilie");
    let Caso = new Documental("El caso Alcasser", 2019, "Elias", "Ninguno");
    let coleccionD = [Timador, Caso];
    let coleccion_documentales = new SubDocumental(coleccionD);

    describe ('Expectativas Documental', () => {

        it('El documental el timador de tinder pertenece a la clase documental', () => {
            expect(Timador).to.be.instanceOf(Documental);
        });

        it('Busqueda título - Timador', () => {
            expect(coleccion_documentales.busquedaTitulo("Timador de Tinder")).to.be.eq("Timador de Tinder");
        });

        it('Busqueda año - 2019', () => {
            expect(coleccion_documentales.busquedaAnyo(2019)).to.be.eq(2019);
        });

        it('Busqueda director - Felicity', () => {
            expect(coleccion_documentales.busquedaDirector("Felicity")).to.be.eq("Felicity");
        });

        it('Busqueda actor - Cecilie', () => {
            expect(coleccion_documentales.busquedaActor("Cecilie")).to.be.eq("Cecilie");
        });
    });
    
});

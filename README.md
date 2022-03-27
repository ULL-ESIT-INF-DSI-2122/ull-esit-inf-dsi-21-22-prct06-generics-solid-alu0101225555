## Informe práctica 6: Clases e interfaces genéricas. Principios SOLID

Noelia Ibáñez Silvestre

alu0101225555

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101225555/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101225555?branch=main)


### Ejercicio 2 - DSIflix

**Enunciado**: Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

- Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
- Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
- Tendrá que extender dicha clase abstracta para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
- Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

**Desarrollo**: Para llevar a cabo este ejercicio, hemos creado 1 interfaz genércia, 1 clase abstracta genérica para cada tipo de oferta del catálogo (Serie, Película y Documental) y a su vez, una subclase para cada una que definirá los métodos usados en cada clase padre de cada uno. 

La interfaz genércia `Stremeable` ha sido definida de la siguiente manera:

```
export interface Streamable<T> {
    coleccion: T[];
    
    busquedaTitulo(titulo: string): string;
    busquedaAnyo(anyo: number): number;
    busquedaActor(actor: string): string;
    busquedaDirector(director: string): string;
}
```
Donde nombramos los métodos usados por todas las clases y subclases.

La clase abstracta genérica `BasicStremeableCollection` implementa la interfaz: 

```
export abstract class BasicStreamableCollection<T> implements Streamable<T>, Printeable<T> {
    constructor (public coleccion: T[]){} //ojo con no declarar los tipos de datos explicitamente

    abstract busquedaTitulo(titulo: string): string; //hay q anotar el tipo de datos retornado explicitamente
    abstract busquedaAnyo(anyo: number): number;
    abstract busquedaActor(actor: string): string;
    abstract busquedaDirector(director: string): string;

    abstract printColeccion(): string;
    abstract printFiltro(coleccion: T[]): string;
}
```

A su vez, definimos las clases para cada tipo, donde tienen la misma apariencia pero cambiando el nombre de la clase para cada tipo. A continuación se observa el ejemplo de la clase `Pelicula`.

```
export class Pelicula {
    constructor(protected titulo: string, protected anyo: number, protected director: string, protected actor: string){}

    getTitulo() {
        return this.titulo;
    }

    getAnyo() {
        return this.anyo;
    }

    getDirector() {
        return this.director;
    }

    getActor() {
        return this.actor;
    }

    setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    setAnyo(anyo: number) {
        this.anyo = anyo;
    }

    setDirector(director: string) {
        this.director = director;
    }

    setActor(actor: string) {
        this.actor = actor;
    }
}
```
Dichas clases, tienen definididos los atributos que van a utilizarse junto a los getters y setters.

Cada clase tiene una subclase 'hija' que hereda los atributos de su clase 'padre' e implementa los métodos. En el siguiente ejemplo, se muestra la subclase `SubPeliculas`:

```
export class SubPeliculas<T extends Pelicula> extends BasicStreamableCollection<T> {
    constructor(public coleccion: T[]) {
        super (coleccion);
    }

    //tenemos que implementar los métodos abstractos de la clase padre aquí
    busquedaTitulo(titulo: string) :string {
        let array_encontrados: T[] = [];
        this.coleccion.forEach((Pelicula) => {
            let tit: string = Pelicula.getTitulo();
            if(tit.search(titulo) != 1) {
                array_encontrados.push(Pelicula);
            }
        });
        //this.printFiltro(array_encontrados);
        return array_encontrados[0].getTitulo();
    };

    busquedaAnyo(any: number) : number {
        let array_encontrados: T[] = [];
        this.coleccion.forEach((pelicula) => {
            let anyo: number = pelicula.getAnyo();
            if(any == anyo) {
                array_encontrados.push(pelicula)
            }
        });
        //this.printColleccion(array_encontrados);
        return array_encontrados[0].getAnyo();
    }

    busquedaDirector(direc: string): string {
        let array: T[] = [];
        this.coleccion.forEach((pelicula) => {
            let director: string = pelicula.getDirector();
            if (director.search(direc) != 1) {
                array.push(pelicula);
            }
        })
        return array[0].getDirector();
    }

    busquedaActor(act: string): string {
        let array: T[] = [];
        this.coleccion.forEach((pelicula) => {
            let actor: string = pelicula.getActor();
            if (actor.search(act) != 1) {
                array.push(pelicula);
            }
        })
        return array[0].getActor();
    }

    /**
     * Método para imprimir el título de la colección filtrada
     * @param colecc vector de la clase peliculas 
     * @returns primera pelicula que sale filtrada 
     */
    printFiltro(colecc: T[]): string {
        console.log(`Coleccioón filtrada: ${colecc}`);
        return colecc[0].getTitulo();
    }

    /**
     * Método para imprimir el título de la colección
     * @returns título de la primera película 
     */
    printColeccion(): string {
        console.log(`Colección: ${this.coleccion}`);
        return this.coleccion[0].getTitulo();
    }
}
```

Además, hemos implemntado una interfaz similar a `Stremeable`, llamada `Printeable`, que sirve para poder imprimir.

## Enlaces
- [tests](/home/usuario/p6/tests)
- [src](/home/usuario/p6/src)
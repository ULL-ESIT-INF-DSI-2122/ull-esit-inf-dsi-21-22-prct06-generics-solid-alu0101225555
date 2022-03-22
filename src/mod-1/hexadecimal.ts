/**
 * Clase Hexadecimal que recibe un número entero positivo
 */
export class Hexadecimal {

    /**
     * Constructor
     * @param numero número que se le pasa a la clase
     */
    constructor (private numero: number) {
        this.numero = numero;
    }

    /**
     * Getter del atributo privado numero
     * @returns numero
     */
    getNumber() {
        return this.numero;
    }

    /*toString(num: Hexadecimal) {
        //let numHex = this.numero.toString();
        return this.numero.toString();
        //return toString(this.numero);
    }*/

    
    /**
     * Método que devuelve el valor del número entero
     * @returns valor numero entero
     */
    valueOf() {
        return this.numero;    
    }

    /**
     * Función que suma dos números
     * @param b segundo parámetro para poder operar
     * @returns devuleve la suma
     */
    add(b:Hexadecimal):Hexadecimal {
        return new Hexadecimal( this.numero + b.valueOf() );
    }

    /**
     * Función que resta dos números
     * @param b segundo parámetro para poder operar
     * @returns devuleve la resta
     */
    substract(b:Hexadecimal):Hexadecimal {
        return new Hexadecimal( this.numero - b.valueOf() );
    }

    /**
     * Método para pasar a un enetero a cadena hexadecimal
     * @returns hex contiene la cadena en hexadecimal
     */
    toString() {
        var hex = this.numero.toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;

        // this.numero.toString("nombre de la funcion" , 16);
    }

    /**
     * 
     * @returns cadena convertida a entero
     */
    parse() {
        let cadena = this.numero.toString(16); 
        return parseInt(cadena, 16);
    }
}

let a = new Hexadecimal(24);
let b = new Hexadecimal(23);
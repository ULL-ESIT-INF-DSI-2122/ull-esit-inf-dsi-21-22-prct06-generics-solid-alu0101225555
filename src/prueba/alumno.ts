import {Persona} from './persona';

export class Alumno extends Persona {
    constructor(private nombre: string, private apellidos: [string, string], private edad: number, private curso: number) {
        super(nombre, apellidos, edad);
        this.curso = curso;
    }

    getCurso() {
        return this.curso;
    }

    getMultiplicacion(edad: number, curso: number) {
        return edad*curso;
    }
}
import { persona } from "./Persona";
export class estudiantes extends persona{
    curso_Matriculado: string;

    constructor(nombre: string , apellido: string , cedula: number , estado_Civil: string ,curso_Matriculado: string){
        super(nombre, apellido , cedula, estado_Civil );
        this.curso_Matriculado = curso_Matriculado;

    }

    public matriculacion_Estudiante(nueva_matriculacion_Estudiante: string ){
        this.curso_Matriculado = nueva_matriculacion_Estudiante;

    }

    public imprimir_estudiantes(nombre, apellido, cedula, estado_Civil, curso_Matriculado ){
        console.log("Hola!, mi nombre es: "+ this.nombre + this.apellido + ", con cedula: " + this.cedula + ", mi estado civil es: " + this.estado_Civil + ", con un curso en: " + this.curso_Matriculado);

    }
}
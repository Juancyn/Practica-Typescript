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

    imprimirEstudiante(){
        super.imprimirPerson()
        console.log(`el curso donde esta vinculado es: ${this.curso_Matriculado}`)
    }
}
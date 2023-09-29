class estudiantes extends persona{
    curso_Matriculado: string;

    constructor(nombre: string , apellido: string , cedula: number , estado_Civil: string ,curso_Matriculado: string){
        super(nombre, apellido , cedula, estado_Civil );
        this.curso_Matriculado = curso_Matriculado;

    }
}
import { empleado } from "./empleado";
export class profesores extends empleado {
    departamento: string;

    constructor(nombre: string , apellido: string , cedula: number , estado_Civil: string , ano_Incorporacion: number , num_Despacho: number , departamento: string){
        super(nombre, apellido, cedula, estado_Civil, ano_Incorporacion, num_Despacho);
        this.departamento = departamento;
    
    }

    public cambiar_Departamento(Nuevo_cambiar_Departamento: string ){
        this.departamento = Nuevo_cambiar_Departamento;
    }

    imprimirProfesor(){
        super.imprimirEmpleado()
        console.log(`Esta en el departamento: ${this.departamento}`)
    }

}
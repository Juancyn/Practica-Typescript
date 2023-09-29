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

    public imprimir_profesores(nombre, apellido, cedula, estado_Civil, ano_Incorporacion, num_Despacho, departamento){
        console.log("Hola!, mi nombre es: "+ this.nombre + this.apellido + ", con cedula: " + this.cedula + ", mi estado civil es: " + this.estado_Civil + "me incorpore el año: " + this.ano_Incorporacion + " mi numero de despacho es: " + this.num_Despacho + " fui asignado al departamento: " + this.departamento );

    }
}
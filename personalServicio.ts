import { empleado } from "./empleado";
export class personal_Servicio extends empleado{
    seccion_Asignado: string;

    constructor(nombre: string , apellido: string , cedula: number , estado_Civil: string , ano_Incorporacion: number ,num_Despacho: number , seccion_Asignado: string){
        super(nombre, apellido , cedula, estado_Civil, ano_Incorporacion, num_Despacho ),
        this.seccion_Asignado = seccion_Asignado;
    }

    public cambiar_seccion_Asignado(nuevo_cambiar_seccion_Asignado: string ){ 
       
        this.seccion_Asignado = nuevo_cambiar_seccion_Asignado;
    }

    public imprimir_personalServicio(nombre, apellido, cedula, estado_Civil, ano_Incorporacion, num_Despacho, seccion_Asignado){
        console.log("Hola!, mi nombre es: "+ this.nombre + this.apellido + ", con cedula: " + this.cedula + ", mi estado civil es: " + this.estado_Civil + "me incorpore el año: " + this.ano_Incorporacion + " mi numero de despacho es: " + this.num_Despacho + " fui asignado a la seccion: " + this.seccion_Asignado );

    }
}
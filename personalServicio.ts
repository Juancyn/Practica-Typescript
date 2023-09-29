import { empleado } from "./empleado";
export class personal_Servicio extends empleado{
    seccion_Asignado: string;

    constructor(nombre: string , apellido: string , cedula: number , estado_Civil: string , 
        ano_Incorporacion: number ,num_Despacho: number , seccion_Asignado: string){
        super(nombre, apellido , cedula, estado_Civil, ano_Incorporacion, num_Despacho ),
        this.seccion_Asignado = seccion_Asignado;
    }

    public cambiar_seccion_Asignado(nuevo_cambiar_seccion_Asignado: string ){ 
       
        this.seccion_Asignado = nuevo_cambiar_seccion_Asignado;
    }

    imprimirpersonServicio(){
        super.imprimirPerson()
        console.log(`Lugar donde esta asignado: ${this.seccion_Asignado}`)
    }
    
    
}
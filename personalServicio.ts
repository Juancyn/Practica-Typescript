class personal_Servicio extends empleado{
    seccion_Asignado: string;

    constructor(nombre: string , apellido: string , cedula: number , estado_Civil: string , ano_Incorporacion: number ,num_Despacho: number , seccion_Asignado: string){
        super(nombre, apellido , cedula, estado_Civil, ano_Incorporacion, num_Despacho ),
        this.seccion_Asignado = seccion_Asignado;
    }
}
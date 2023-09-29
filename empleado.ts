import { persona } from "./Persona";
 export class empleado extends persona {
  ano_Incorporacion: number;
  num_Despacho: number;

  constructor(nombre: string , apellido: string , cedula: number , estado_Civil: string , ano_Incorporacion: number , num_Despacho: number){
    super(nombre, apellido , cedula, estado_Civil );
    this.ano_Incorporacion = ano_Incorporacion;
    this.num_Despacho = num_Despacho;

  }

  public cambiar_Despacho(nuevo_Despacho: number){
      this.num_Despacho = nuevo_Despacho;
  }
  
}
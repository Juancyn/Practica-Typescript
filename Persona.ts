export class persona{
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _apellido: string;
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
    private _cedula: number;
    public get cedula(): number {
        return this._cedula;
    }
    public set cedula(value: number) {
        this._cedula = value;
    }
    private _estado_Civil: string;
    public get estado_Civil(): string {
        return this._estado_Civil;
    }
    public set estado_Civil(value: string) {
        this._estado_Civil = value;
    }

 constructor(nombre: string , apellido: string , cedula: number , estado_Civil:string ){ 
        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
        this._estado_Civil = estado_Civil;
    }

    public cambiar_estado_Civil(nuevo_estado_Civil: string ){ 
       
        this._estado_Civil = nuevo_estado_Civil;
    }

}

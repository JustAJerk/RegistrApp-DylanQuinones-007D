export interface Users{
    id:number;
    username: string;
    password: string;
    rut: string;
    role: string;
    correo: string;
    isactive: boolean;
    clases: Clases[];
}

export interface UsuarioNuevo{
    username: string;
    password: string;
    rut: string;
    role: string;
    correo: string;
    isactive: boolean;
    clases: Clases[];
}

export interface CodigoQR{
    id: string;
    image: string;
}

export interface Clases{
    nombre:string;
    año:number;
    semestre:string;
    horasSemanales:string;
}
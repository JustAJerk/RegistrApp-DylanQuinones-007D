export interface Users{
    id:number;
    username: string;
    password: string;
    rut: string;
    role: string;
    correo: string;
    isactive: boolean;
<<<<<<< HEAD
=======
    clases: Clases[];
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
}

export interface UsuarioNuevo{
    username: string;
    password: string;
    rut: string;
    role: string;
    correo: string;
    isactive: boolean;
<<<<<<< HEAD
=======
    clases: Clases[];
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
}

export interface CodigoQR{
    id: string;
<<<<<<< HEAD
    nombreDocente:string;
    asignatura:string;
    fecha:string;
}

export interface QR{
    nombreDocente:string;
    asignatura:string;
    fecha:string;
}

export interface Clases{
    id:number;
    nombre:string;
    codigo:string;
    docente:string;
    anio:number;
    semestre:string;
    horasSemanales:number;
}

export interface ClaseEspecifica{
    nombre:string;
    codigo:string;
    docente:string;
    anio:number;
    semestre:string;
    horasSemanales:number;
=======
    image: string;
}

export interface Clases{
    nombre:string;
    año:number;
    semestre:string;
    horasSemanales:string;
>>>>>>> 56fe6d99a70a39cc27d00aaa8f70bc45e7234d3a
}
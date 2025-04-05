export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number; 
    categoria: string;
    marca: string;
    imagen_url: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    estado: boolean;
    Peso: number;
    dimensiones: string;
    }
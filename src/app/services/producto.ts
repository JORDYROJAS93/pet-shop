import { Injectable } from "@angular/core";
import { AppSettings } from "../app.settings";
import { HttpClient } from "@angular/common/http";
import { Producto } from "../models/producto";


const baseUrlProducto = AppSettings.API_ENDPOINT + '/productos';

@Injectable({
  providedIn: 'root'
  })
  export class ProductoService {

    constructor(private http: HttpClient){}

    //Metodo para obtener todos los productos
    getAllProductos() {
      return this.http.get<Producto[]>(baseUrlProducto);
    }

    //Metodo para la creacion de un producto
    addProducto(producto: Producto) {
      return this.http.post<Producto>(baseUrlProducto, producto);
    }

    //Metodo para la actualizacion de un producto
    updateProducto(producto: Producto) {
      return this.http.put<Producto>(baseUrlProducto + '/' + producto.id, producto);
    }

    //Metodo para eliminar un producto
    deleteProducto(id: number) {
      return this.http.delete<Producto>(baseUrlProducto + '/' + id);
    }
    //Metodo para obtener un producto por id
    getProductoById(id: number) {
      return this.http.get<Producto>(baseUrlProducto + '/' + id);
    }

  }
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  
})
export class ShopComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.getProductos();
    }

  getProductos(): void {
    // Llamar al servicio para obtener los productos
    console.log('Llamando al servicio para obtener los productos...');
    this.productoService.getAllProductos().subscribe(productos => {
      console.log(productos);
      this.productos = productos;
    });
  }

  onAddCart(producto: Producto): void {
    // Lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', producto);
  }
  

}

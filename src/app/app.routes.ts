import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent}, //Pagina de inicio
    { path: 'shop', component: ShopComponent}, //Pagina de tienda
    { path: 'contact', component: ContactComponent}, //Pagina de contacto
    { path: 'about', component: AboutComponent}, //Pagina de acerca de
  //  { path: '**', redirectTo: ''} //Redirecciona a la pagina de inicio si no se encuentra la ruta
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule],
})
export class AppRoutingModule { } //Exporta el modulo de rutas

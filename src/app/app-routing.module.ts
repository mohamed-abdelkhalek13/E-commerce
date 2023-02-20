import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { CategoriesComponent } from './Components/Pages/categories/categories.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { OrdersComponent } from './Components/Pages/orders/orders.component';
import { ProductDetailsComponent } from './Components/Pages/product-details/product-details.component';
import { ProductsComponent } from './Components/Pages/products/products.component';
import { RegisterComponent } from './Components/Pages/register/register.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"products", component:ProductsComponent},
  {path:"products/:id", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"orders", component:OrdersComponent},
  {path:"Categories", component:CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { ShippingComponent } from './Components/Pages/shipping/shipping.component';
import { NgModule, Component } from '@angular/core';
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
  {path:"categories/:categoryName", component:ProductsComponent},
  {path:"categories/:categoryName/:productID", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"orders", component:OrdersComponent},
  {path:"Categories", component:CategoriesComponent},
  {path:"shipping", component:ShippingComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"transactions", component:TransactionsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

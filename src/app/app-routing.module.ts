import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { ShippingComponent } from './Components/Pages/shipping/shipping.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/Pages/add-product/add-product.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { CategoriesComponent } from './Components/Pages/categories/categories.component';
import { CustomersComponent } from './Components/Pages/customers/customers.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { OrdersComponent } from './Components/Pages/orders/orders.component';
import { ProductDetailsComponent } from './Components/Pages/product-details/product-details.component';
import { ProductsComponent } from './Components/Pages/products/products.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { EditUserComponent } from './Components/Shared/edit-user/edit-user.component';
import { ReviewsComponent } from './Components/Pages/reviews/reviews.component';
import { ProductCardComponent } from './Components/Shared/product-card/product-card.component';
import { AdminDashBoardComponent } from './Components/Pages/admin-dash-board/admin-dash-board.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"products", component:ProductsComponent},
  {path:"products/:id", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"orders", component:OrdersComponent},
  {path:"Categories", component:CategoriesComponent},
  {path:"Dashboard",component:AdminDashBoardComponent},
  {path:"productList",component:ProductCardComponent},
  {path:"AddProducts",component:AddProductComponent},
  {path:"Customers",component:CustomersComponent},
  {path:"EditUser",component:EditUserComponent},
  {path:"shipping", component:ShippingComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"transactions", component:TransactionsComponent},
  {path:"reviews",component:ReviewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

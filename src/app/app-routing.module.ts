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

import { AuthGuard } from './guards/auth.guard';
import { NotAccessableGuard } from './guards/not-accessable.guard';
import { EditUserComponent } from './Components/Shared/edit-user/edit-user.component';
<<<<<<< HEAD
import { NotfoundComponent } from './Components/Pages/notfound/notfound.component';
=======
import { ReviewsComponent } from './Components/Pages/reviews/reviews.component';
import { ProductCardComponent } from './Components/Shared/product-card/product-card.component';
import { AdminDashBoardComponent } from './Components/Pages/admin-dash-board/admin-dash-board.component';
import { EditProductComponent } from './Components/Pages/edit-product/edit-product.component';
import { ManageCategoriesComponent } from './Components/Pages/manage-categories/manage-categories.component';
import { ProductListComponent } from './Components/Pages/product-list/product-list.component';
>>>>>>> 589429e6e3c215840f9f91dfd41b4e0a11b8d410

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"products", component:ProductsComponent},
  {path:"products/:id", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"orders", component:OrdersComponent},
  {path:"Categories", component:CategoriesComponent},
<<<<<<< HEAD
  {path:"Dashboard",component:AdminDashBoardComponent,children:[
    {path:"AddProducts",component:AddProductComponent},
    {path:"EditProduct/:id",component:EditProductComponent},
    {path:"productList",component:ProductListComponent},
    {path:"Categories", component:ManageCategoriesComponent},
    {path:"Customers",component:CustomersComponent},
    {path:"reviews",component:ReviewsComponent},
    {path:"EditUser",component:EditUserComponent},
  ]},
  {path:"shipping", component:ShippingComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"transactions", component:TransactionsComponent},
=======

  {path:"AddProducts",component:AddProductComponent},
  {path:"Customers",component:CustomersComponent},
  {path:"EditUser",component:EditUserComponent},

  {path:"shipping", component:ShippingComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"transactions", component:TransactionsComponent},




  { path: '', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAccessableGuard],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'register-admin', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoriesComponent },
  { path: 'shipping', component: ShippingComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  {
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'categories/:categoryName', component: ProductsComponent },
  {
    path: 'categories/:categoryName/:productID',
    component: ProductDetailsComponent,
  },
  { path: 'AddProducts', component: AddProductComponent },
  { path: 'Customers', component: CustomersComponent },
  { path: 'EditUser', component: EditUserComponent },
<<<<<<< HEAD
  {path:"**", component:NotfoundComponent},
=======

>>>>>>> 2a46bda877372e41a89cccb2211ff7b7d0e7de34
>>>>>>> 589429e6e3c215840f9f91dfd41b4e0a11b8d410
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

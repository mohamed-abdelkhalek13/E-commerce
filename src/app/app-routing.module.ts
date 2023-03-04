import { AdminGuard } from './guards/admin.guard';
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



import { NotfoundComponent } from './Components/Pages/notfound/notfound.component';

import { OrdersdashboardComponent } from './Components/Pages/ordersdashboard/ordersdashboard.component';

import { AdminDashBoardComponent } from './Components/Pages/admin-dash-board/admin-dash-board.component';
import { EditProductComponent } from './Components/Pages/edit-product/edit-product.component';
import { ProductListComponent } from './Components/Pages/product-list/product-list.component';
import { ManageCategoriesComponent } from './Components/Pages/manage-categories/manage-categories.component';
import { ReviewsComponent } from './Components/Pages/reviews/reviews.component';


const routes: Routes = [
  {
    path: 'Dashboard',
    component: AdminDashBoardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'AddProducts', component: AddProductComponent },
      { path: 'EditProduct/:id', component: EditProductComponent },
      { path: 'productList', component: ProductListComponent },
      { path: 'Categories', component: ManageCategoriesComponent },
      { path: 'Customers', component: CustomersComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'EditUser', component: EditUserComponent },
      {
        path: 'register-admin',
        component: RegisterComponent,
      },
    ],
  },
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"products", component:ProductsComponent},
  {path:"products/:id", component:ProductDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"orders", component:OrdersComponent},
  {path:"Categories", component:CategoriesComponent},

  {path:"AddProducts",component:AddProductComponent},
  {path:"Customers",component:CustomersComponent},
  {path:"EditUser",component:EditUserComponent},
  {path:"shipping", component:ShippingComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"transactions", component:TransactionsComponent},
{path:"dashboard", component: AdminDashBoardComponent},

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
  {path:"AddProducts",component:AddProductComponent},
  {path:"Customers",component:CustomersComponent},
  {path:"EditUser",component:EditUserComponent},

  {path:"shipping", component:ShippingComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"transactions", component:TransactionsComponent},

  // { path: 'AddProducts', component: AddProductComponent },
  // { path: 'Customers', component: CustomersComponent },
  // { path: 'EditUser', component: EditUserComponent },

  { path: '', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAccessableGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAccessableGuard],
  },

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
  { path: 'manageorder', component: OrdersdashboardComponent },
  { path: 'reviews', component: ReviewsComponent },
  // { path: 'ordershistory', component: OrdersComponent },
  {path:"**", component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

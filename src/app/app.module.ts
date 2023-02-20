import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { FilterComponent } from './Components/Shared/filter/filter.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { ProductsComponent } from './Components/Pages/products/products.component';
import { ProductDetailsComponent } from './Components/Pages/product-details/product-details.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { OrdersComponent } from './Components/Pages/orders/orders.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
<<<<<<< HEAD

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './Components/Pages/slider/slider.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './Components/Pages/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './Components/Pages/categories/categories.component';
>>>>>>> 815f9fc64b9a27658bb4f288eda6a7023d875ac9
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD

    SliderComponent


=======
    SliderComponent,
    CategoriesComponent,
>>>>>>> 815f9fc64b9a27658bb4f288eda6a7023d875ac9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD

    // FontAwesomeModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,



=======
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> 815f9fc64b9a27658bb4f288eda6a7023d875ac9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

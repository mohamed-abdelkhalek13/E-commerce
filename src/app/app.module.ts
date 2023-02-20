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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './Components/Pages/slider/slider.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { CategoriesComponent } from './Components/Pages/categories/categories.component';

=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 73ed8f3b55fb32069460877c4d44613dca3930cc

>>>>>>> 73ed8f3b55fb32069460877c4d44613dca3930cc
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
    CategoriesComponent,
=======
<<<<<<< HEAD
    SliderComponent
=======
>>>>>>> 6fd690e0450a61cf8c993d104993824f525b4dd6

>>>>>>> 73ed8f3b55fb32069460877c4d44613dca3930cc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FontAwesomeModule
=======
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule


>>>>>>> 73ed8f3b55fb32069460877c4d44613dca3930cc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

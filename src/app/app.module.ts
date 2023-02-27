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
import { SliderComponent } from './Components/Pages/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './Components/Pages/categories/categories.component';

import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './Components/Pages/shipping/shipping.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbDatepickerModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductCardComponent } from './Components/Shared/product-card/product-card.component';
import { ProductReviewsComponent } from './Components/Shared/product-reviews/product-reviews.component';
import { ProductDetailsCardComponent } from './Components/Shared/product-details-card/product-details-card.component';




import { ReviewsComponent } from './Components/Pages/reviews/reviews.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailsCardComponent,
    ProductReviewsComponent,
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
    SliderComponent,
    CategoriesComponent,
    ShippingComponent,
    CheckoutComponent,

    ReviewsComponent,



    TransactionsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbAccordionModule,
    HttpClientModule,
    NgbDatepickerModule,
    NgbModule,
    NgbCarouselModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,


  ],
  providers: [NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

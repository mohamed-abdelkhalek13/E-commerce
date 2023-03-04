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
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './Components/Pages/categories/categories.component';
import { AdminDashBoardComponent } from './Components/Pages/admin-dash-board/admin-dash-board.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { AddProductComponent } from './Components/Pages/add-product/add-product.component';
import {MatButtonModule} from '@angular/material/button';
import { CustomersComponent } from './Components/Pages/customers/customers.component';
import { EditUserComponent } from './Components/Shared/edit-user/edit-user.component';
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
import {MatDialogModule} from '@angular/material/dialog';
import { ReviewsComponent } from './Components/Pages/reviews/reviews.component';
import { ManageCategoriesComponent } from './Components/Pages/manage-categories/manage-categories.component';
import { CatdialogComponent } from './Components/dialogs/catdialog/catdialog.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchBarComponent } from './Components/Shared/search-bar/search-bar.component';
import {MatRadioModule} from '@angular/material/radio';

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
    AdminDashBoardComponent,
    AddProductComponent,
    CustomersComponent,
    EditUserComponent,
    ShippingComponent,
    CheckoutComponent,
    ReviewsComponent,
    CatdialogComponent,
    TransactionsComponent,
    ManageCategoriesComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    NgbModule,
    NgbCarouselModule ,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    NgbModule,
    NgbCarouselModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    NgSelectModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
<<<<<<< HEAD
=======
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
import { AdminDashBoardComponent } from './Components/Pages/admin-dash-board/admin-dash-board.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { AddProductComponent } from './Components/Pages/add-product/add-product.component';
import { MatButtonModule } from '@angular/material/button';
import { EditUserComponent } from './Components/Shared/edit-user/edit-user.component';
<<<<<<< HEAD
import { ShippingComponent } from './Components/Pages/shipping/shipping.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbDatepickerModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TransactionsComponent } from './Components/Pages/transactions/transactions.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
=======
import { MatMenuModule } from '@angular/material/menu';
import { CustomersComponent } from './Components/Pages/customers/customers.component';
import { ShippingComponent } from './Components/Pages/shipping/shipping.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { NgxSpinnerModule } from 'ngx-spinner';
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductCardComponent } from './Components/Shared/product-card/product-card.component';
import { ProductReviewsComponent } from './Components/Shared/product-reviews/product-reviews.component';
import { ProductDetailsCardComponent } from './Components/Shared/product-details-card/product-details-card.component';
<<<<<<< HEAD
import {MatDialogModule} from '@angular/material/dialog';
=======
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
import { ReviewsComponent } from './Components/Pages/reviews/reviews.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { ManageCategoriesComponent } from './Components/Pages/manage-categories/manage-categories.component';
import { CatdialogComponent } from './Components/dialogs/catdialog/catdialog.component';
<<<<<<< HEAD
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchBarComponent } from './Components/Shared/search-bar/search-bar.component';
import {MatRadioModule} from '@angular/material/radio';

=======
import { EditProductComponent } from './Components/Pages/edit-product/edit-product.component';
import { ProductListComponent } from './Components/Pages/product-list/product-list.component';
import { NotfoundComponent } from './Components/Pages/notfound/notfound.component';
import { BestproductsComponent } from './Components/bestproducts/bestproducts.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OrdersdashboardComponent } from './Components/Pages/ordersdashboard/ordersdashboard.component';
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
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
<<<<<<< HEAD
    SearchBarComponent,
=======
    EditProductComponent,
    ProductListComponent,
    ManageCategoriesComponent,
    NotfoundComponent,
    BestproductsComponent,
    OrdersdashboardComponent,
    ProductListComponent,
    BestproductsComponent,
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    NgbModule,
    NgbCarouselModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
<<<<<<< HEAD
    NgSelectModule,
    FormsModule,
    MatRadioModule
=======
    ToastrModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    SlickCarouselModule
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
  ],
  providers: [
    NgbModal,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS,
      multi: true,
    },
    JwtHelperService,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

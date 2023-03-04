import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductsComponent } from '../../Pages/products/products.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  fullName: any;
  fullNameSubscription!: Subscription;
  constructor(
    public auth: AuthService,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fullName = this.auth.fullName;
    this.fullNameSubscription = this.auth.fullNameSubject.subscribe(
      (name: string) => {
        this.fullName = name;
      }
    );
  }

  ngOnDestroy(): void {
    this.fullNameSubscription.unsubscribe();
  }

  logOut() {
    this.auth.logOut();
  }
  logIn() {
    this.auth.isLoggedIn();
  }
  getAll() {
    this.productsService.DBProducts$.next(this.productsService.getProducts());
  }
}

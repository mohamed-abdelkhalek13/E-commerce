<<<<<<< HEAD
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
=======
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
import { ProductsService } from 'src/app/Services/products.service';
import { ProductsComponent } from '../../Pages/products/products.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
<<<<<<< HEAD
export class HeaderComponent {
  showSearch = true;
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router:Router){}
  getAll(){
    let filteredArray = this.productsService.getProducts();
    let array:any[] = filteredArray.map((p:any) => {
      let starsArray = new Array(Math.floor(p.avgRating)).fill('');
      let halfAStar = p.avgRating - Math.floor(p.avgRating);
      return {...p, ratingArray: starsArray, halfAStar:halfAStar}
    })
    this.productsService.DBProducts$.next(array);
    console.log(array)
}
  toggleSearch(){
    this.showSearch = !this.showSearch;
=======
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
>>>>>>> b8d897c6064145d4d74633634a60cd81231a5ccf
  }
}

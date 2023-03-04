

import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import { ProductsService } from 'src/app/Services/products.service';
import { ProductsComponent } from '../../Pages/products/products.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit {
  showSearch = true;
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
  getAll(){
    let filteredArray = this.productsService.getProducts();
    let array:any[] = filteredArray.map((p:any) => {
      let starsArray = new Array(Math.floor(p.avgRating)).fill('');
      let halfAStar = p.avgRating - Math.floor(p.avgRating);
      return {...p, ratingArray: starsArray, halfAStar:halfAStar}
    })
    this.productsService.DBProducts$.next(array);
}
  toggleSearch(){
    this.showSearch = !this.showSearch;
  }
  logOut() {
    this.auth.logOut();
  }
  logIn() {
    this.auth.isLoggedIn();
  }

}

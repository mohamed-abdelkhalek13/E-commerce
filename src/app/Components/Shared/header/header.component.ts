import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductsComponent } from '../../Pages/products/products.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
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
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductService } from '../../core/services/product-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  products:any[] = [];
  getSearchKeyword = "";
  constructor(private productService: ProductsService, private router:Router){}
  ngOnInit(){
    this.productService.GetProductsFromDB().subscribe({
      next: (data:any) => {
        this.products = data;
        this.productService.SetProducts(data)
      }
    })
  }
  searchOption: string ='By product';
  options: string[] = ['By product', 'By a keyword'];
  search(){
    let searchProducts = this.products.filter(p => p.about.toLowerCase().trim().includes(this.getSearchKeyword.toLowerCase().trim()) || p.name.toLowerCase().trim().includes(this.getSearchKeyword.toLowerCase().trim()))
      if(searchProducts.length == 0){
        return;
      }
      let array:any[] = searchProducts.map((p:any) => {
        let starsArray = new Array(Math.floor(p.avgRating)).fill('');
        let halfAStar = p.avgRating - Math.floor(p.avgRating);
        return {...p, ratingArray: starsArray, halfAStar:halfAStar}
      })
      this.productService.StoreProductsFromAKeyword(array);
      this.productService.DBProducts$.next(array);
      this.router.navigate(['/categories/search']);
      let arr = [{productid:1, quantity:2},{productid:2, quantity:3}]
      
  }
}



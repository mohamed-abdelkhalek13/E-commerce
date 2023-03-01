import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute){}
  sort(event:any){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0){
      currentProducts= this.productsService.getProducts();
    }
    let selected = event.value;
    if(selected =='lowToHigh'){
      currentProducts.sort((a:any, b:any) => Number(a.price) - Number(b.price));
    }else if(selected =='highToLow'){
      currentProducts.sort((a:any, b:any) => Number(b.price) - Number(a.price));
    }
    this.productsService.DBProducts$.next(currentProducts);
  }
}

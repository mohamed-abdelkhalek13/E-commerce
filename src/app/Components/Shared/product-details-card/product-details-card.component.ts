import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.css']
})
export class ProductDetailsCardComponent {
  product:any={};
  quantity=1;
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute){}
  ngOnInit(){
    this.product = this.productService.GetProductById(this.activatedRoute.snapshot.params["productID"]);
  }
  increase(){
    this.quantity++;
  }
  decrease(){
    if(this.quantity == 1){
      this.quantity =1;
    }else{
      this.quantity--;
    }
  }
}

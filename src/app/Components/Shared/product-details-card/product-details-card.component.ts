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
  imgIndex = 0;
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute){}
  ngOnInit(){

    this.productService.GetProductFromDBById(this.activatedRoute.snapshot.params["productID"]).subscribe({
      next: (data:any) => {
        let product:any = data;
        let array:any[] = data.about.split(",")
        let newProduct = {...product, aboutArray: array}
        this.product = newProduct;
      }
    })
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
  setImage0(){
    this.imgIndex = 0;
  }
  setImage1(){
    this.imgIndex = 1;
  }
  setImage2(){
    this.imgIndex = 2;
  }
}

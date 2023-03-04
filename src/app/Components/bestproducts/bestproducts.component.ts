import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductService } from '../core/services/prod';

@Component({
  selector: 'app-bestproducts',
  templateUrl: './bestproducts.component.html',
  styleUrls: ['./bestproducts.component.css']
})
export class BestproductsComponent {

  path="";
  products: any='';






  constructor(private productsService:ProductsService) {



  }
  title = 'ngSlick';

  addSlide() {
    this.products.push()
  }

  removeSlide() {
    this.products.length = this.products.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }



  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false,
    // cssEase: 'linear',


  };



  ngOnInit(){
    this.productsService.GetProductsFromDB().subscribe({
      next:(prod:any)=>{
        let productsAll=prod;
        this.productsService.DBProducts$.next(productsAll);
      }
    });
    this.productsService.DBProducts$.subscribe({
      next:(data)=>{this.products=data,
        this.products=this.products.slice(0,10),console.log(this.products)


      }



    });


}



}

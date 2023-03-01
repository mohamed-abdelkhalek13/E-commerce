import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  products:any[] = [];
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute){
  }
  productsArray:any[] = [];
  ngOnInit(){
    this.productsService.DBProducts$.subscribe({
      next: (data:any) => {
        this.products = data;
      }
    })
  }
}


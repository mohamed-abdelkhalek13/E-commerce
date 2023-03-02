import { ChangeDetectionStrategy, DoCheck, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  path="";
  products: any;
  showButtons=false;
  showEmptyProduct=false;
  constructor(private productsService:ProductsService,private route:ActivatedRoute){
    
  }
  ngDoCheck(): void {
    
  }
  ngOnInit(){
    this.productsService.GetProductsFromDB().subscribe({
      next:(prod:any)=>{
        let productsAll=prod;
        this.productsService.DBProducts$.next(productsAll);
      }
    });
    this.productsService.DBProducts$.subscribe({
      next:(data)=>{this.products=data, console.log(this.products);}
      
      
    });
    if(this.route.routeConfig.path=="productList"){
      this.showButtons=true;
      this.productsService.editMode=true;
    }
    else this.showButtons=false;
    // if(this.products==undefined) this.showEmptyProduct=true;
    
  }
  deleteProduct(id:number){ 
    console.log(id);
    this.productsService.deleteProduct(+id);
  }
  trackByFn(index:number,prd:Product){
      return prd.id;
  }
  EditProduct(id:number){
    console.log(id);
    this.productsService.productEdit=  this.productsService.GetProductById(id);
  }
}

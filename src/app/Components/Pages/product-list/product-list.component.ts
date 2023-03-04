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
    this.productsService.GetAllProductsFromDB();
    this.productsService.AllProductSubject.subscribe((res)=>{
      console.log(res);
      this.products=res;
      this.productsService.statusofProducts.subscribe(status=>{
        this.showEmptyProduct=!status;
        console.log(status);
        
      })
      
      // if(!this.productsService.isThereAnyProducts) this.showEmptyProduct=true;
    })
    if(this.route.routeConfig.path=="productList"){
      this.showButtons=true;
      this.productsService.editMode=true;
    }
    // else this.showButtons=false;
    
  }
  deleteProduct(id:number){ 
    console.log(id);
    this.productsService.deleteProduct(+id);
    this.productsService.GetAllProductsFromDB();
      // this.products=res;
      this.productsService.AllProductSubject.subscribe(res=>{
        console.log(res);
        
      });
    
  }
  trackByFn(index:number,prd:Product){
      return prd.id;
  }
  EditProduct(id:number){
    console.log(id);
    this.productsService.productEdit=  this.productsService.GetProductById(id);
  }
}

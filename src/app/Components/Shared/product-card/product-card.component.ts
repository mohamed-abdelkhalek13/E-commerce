import { DoCheck, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../../core/services/product-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, DoCheck{
  path="";
  products:Product[] = [];
  showButtons=false;
  constructor(private productService:ProductService,private route:ActivatedRoute){
    this.products=this.productService.getAllProduct();
    
  }
  ngDoCheck(): void {
    // if(this.products!=this.productService.getAllProduct()){
      // }
    }
    ngOnInit(){
      console.log(this.productService.getAllProduct());
     
    this.path= this.route.snapshot.routeConfig.path;
    if(this.path=="productList"){
        this.showButtons=true;
    }
  }
  deleteProduct(id:number){ 
    console.log(id);
    
    this.productService.deleteProduct(+id);
  }
  // trackByFn(index:number,prd:Product){
  //     return prd.id;
  // }
  EditProduct(id:number){
      this.productService.productItem= this.products.find((id)=>id==id);
      this.productService.editMode=true;
  }
}

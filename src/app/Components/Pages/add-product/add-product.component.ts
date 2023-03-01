import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../core/services/product-service.service';
export interface Product{
  name:string;
  price:number;
  weight:number;
  description:string;
  stock:number;
  color:string;
  about:string;
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
    productItem!:Product;
    constructor(private productService:ProductService){
      this.productItem={name:"",price:0,weight:0,description:"",stock:0,color:"",about:""}
    }
    CategoryList:string[]=["Dell","HP","Lenovo"];
    backgroundColor="white";
    change(){
      this.backgroundColor="#ddd";
    }
    @ViewChild('AddProductForm')AddProductForm!: NgForm;
    onSubmit(){
        console.log(this.AddProductForm.value);

        this.productItem.name=this.AddProductForm.value.name;
        this.productItem.price=this.AddProductForm.value.price;
        this.productItem.stock=this.AddProductForm.value.stock;
        this.productItem.weight=this.AddProductForm.value.weight;
        this.productItem.description=this.AddProductForm.value.description;
        this.productItem.about=this.AddProductForm.value.about;
        this.productItem.color=this.AddProductForm.value.color;
        // this.productItem.image=this.AddProductForm.value.image;
        console.log(this.productItem,"****");
        
        this.productService.addProduct(this.productItem);
        // this.AddProductForm.reset();
    }
}

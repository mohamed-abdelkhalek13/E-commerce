import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product-service.service';
export interface Product{
  id:number;
  name:string;
  price:number;
  weight:number;
  description:string;
  stock:number;
  color:string;
  about:string;
  images:string[];
  category:string;
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
    productId=0;
    productItem!:Product;
    editMode=this.productService.editMode;
    btncontent=""
    constructor(public productService:ProductService,private router:Router){
      this.productItem={id:0,name:"",price:0,weight:0,description:"",stock:0,color:"",about:"",images:[],category:""}
      if(this.editMode) this.btncontent="save changes";
      else this.btncontent="Add Product";
      console.log(productService.getAllProduct());
      // this.productId= this.productService.getAllProduct().length;
    }
  ngOnInit(): void {
    // this.AddProductForm.setValue({
    //   name:this.productService.productItem.name,
    //   price:this.productService.productItem.price,
    //   weight:this.productService.productItem.weight,
    //   description:this.productService.productItem.description,
    //   stock:this.productService.productItem.stock,
    //   color:this.productService.productItem.color,
    //   about:this.productService.productItem.about,
    //   images:this.productService.productItem.images,
    //   category:this.productService.productItem.category
    // })
    // this.productItem=this.productService.productItem;
    // console.log(this.productItem,"***********");
    
  }
    CategoryList:string[]=["Dell","HP","Lenovo"];
    backgroundColor="white";
    change(){
      this.backgroundColor="#ddd";
    }
    @ViewChild('AddProductForm')AddProductForm!: NgForm;
    
    onSubmit(){
        this.productItem.id=this.productId++;
        this.productItem.name=this.AddProductForm.value.name;
        this.productItem.price=this.AddProductForm.value.price;
        this.productItem.stock=this.AddProductForm.value.stock;
        this.productItem.weight=this.AddProductForm.value.weight;
        this.productItem.description=this.AddProductForm.value.description;
        this.productItem.about=this.AddProductForm.value.about;
        this.productItem.color=this.AddProductForm.value.color;
        this.productItem.images.push(this.AddProductForm.value.image);
        this.productItem.category=this.AddProductForm.value.category;
        this.productService.addProduct(this.productItem);
        console.log(this.productItem);
        
        this.AddProductForm.reset();
    }
    submit(){
        // this.router.navigate(['/products']);
    }
}

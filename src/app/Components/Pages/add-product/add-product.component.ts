import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductsService } from 'src/app/Services/products.service';
export interface Product{
  id:number;
  name:string;
  price:number;
  weight:number;
  decreption:string;
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
    productId=this.productService.DBProducts.length;
    productItem!:Product;
    editMode=this.productService.editMode;
    btncontent=""
    CategoryList:any;
    backgroundColor="white";
    @ViewChild('AddProductForm')AddProductForm!: NgForm;
    constructor(public productService:ProductsService,private router:Router){
      this.productItem={id:0,name:"",price:0,weight:0,decreption:"",stock:0,color:"",about:"",images:[],category:""}
      // this.productId= this.productService.getAllProduct().length;
      
    }
    ngOnInit(): void {
      this.productService.GetCategoriesFromDB().pipe(map((res)=>{
        const CategoryList=[];
        for(const key in res){
          if(res.hasOwnProperty(key)){
            CategoryList.push({...res[key],id:key})
          }
        }
        console.log(CategoryList);
        return CategoryList;
        })).subscribe(CategoryList=>{
          this.CategoryList=Object.values(CategoryList)//.map(cats=>cats['name']);
          console.log(this.CategoryList);
          
        });     
    }
    change(){
      this.backgroundColor="#ddd";
    }
    
    onSubmit(){
        this.productItem.id=this.productId++;
        this.productItem.name=this.AddProductForm.value.name;
        this.productItem.price=this.AddProductForm.value.price;
        this.productItem.stock=this.AddProductForm.value.stock;
        this.productItem.weight=this.AddProductForm.value.weight;
        this.productItem.decreption=this.AddProductForm.value.description;
        this.productItem.about=this.AddProductForm.value.about;
        this.productItem.color=this.AddProductForm.value.color;
        this.productItem.images.push(this.AddProductForm.value.image);
        this.productItem.category=this.AddProductForm.value.category;
        this.productService.addProduct(this.productItem);
        this.productService.AllProducts.subscribe({
          next:(data:any)=>{
            let productAll=[...data,this.productItem];
            
            this.productService.AllProducts.next(productAll);
          }
        })
        console.log(this.productItem);
        this.AddProductForm.reset();
        this.router.navigate(['/Dashboard/productList'])
    }
    submit(){
        // this.router.navigate(['/products']);
    }
}

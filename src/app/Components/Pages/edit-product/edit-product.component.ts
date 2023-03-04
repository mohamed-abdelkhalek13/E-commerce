import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, AfterViewInit {
  productId=0;
  product:any;
  productItem:Product;
  editProduct:any;
  editFrom!:any;
  @ViewChild('EditProductForm')EditProductForm!: NgForm;
  constructor(private productService:ProductsService,private route:ActivatedRoute,private router :Router){
      this.editProduct= productService.productEdit;
  }
  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.productId=res['id']
      console.log(this.productId);
      this.productService.GetProductById(this.productId).subscribe((res)=>{
        this.product=res;
        this.editFrom=new FormGroup({
          name:new FormControl<string>(res["name"]),
          decreption:new FormControl(res["decreption"]),
          about:new FormControl(res["about"]),
          category:new FormControl(res["category"]),
          color:new FormControl(res["color"]),
          stock:new FormControl(res["stock"]),
          price:new FormControl(res["price"]),
          weight:new FormControl(res["weight"]),
          images:new FormControl<any>(res["images"][0])
        })
        console.log(this.product);
      });
    });
    console.log(this.productId);
    console.log(this.EditProductForm.value);
  }
  onSubmit(){
      console.log(this.editFrom.value);
      var productObject={id:this.productId,name:this.editFrom.value["name"],price:this.editFrom.value.price,weight:this.editFrom.value.weight,decreption:this.editFrom.value.decreption,stock:this.editFrom.value.stock,color:this.editFrom.value.color,about:this.editFrom.value.about,images:[this.editFrom.value.images],category:this.editFrom.value.category}
      this.productService.editProduct(this.productId,productObject);
      console.log(productObject);
      this.productService.GetAllProductsFromDB();
      // this.products=res;
      this.productService.AllProductSubject.subscribe(res=>{
        console.log(res);
        
      });
      this.router.navigate(['/Dashboard/productList'])
  }
  ngAfterViewInit(){
    
  }
}

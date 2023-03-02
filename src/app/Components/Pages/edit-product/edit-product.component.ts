import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, AfterViewInit {
  productId=0;
  product:any;
  @ViewChild('EditProductForm')EditProductForm!: NgForm;
  editProduct:any;
  constructor(private productService:ProductsService,private route:ActivatedRoute){
      this.editProduct= productService.productEdit;
  }
  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.productId=res['id']
      console.log(this.productId);
      this.product = this.productService.GetProductById(this.productId);
      console.log(this.product);
    });
    console.log(this.productId);
    
 
    console.log(this.EditProductForm.value);
  }
  onSubmit(){

  }
  ngAfterViewInit(){
    
  }
}

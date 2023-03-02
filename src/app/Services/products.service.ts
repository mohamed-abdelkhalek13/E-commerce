import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export interface Product{
  id:number;
  name:string;
  price:number;
  weight:number;
  decreption:string;
  stock:number;
  about:string;
  color:string;
  images:string[];
  category:string;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsURL = 'https://localhost:7150/api/Product';
  categoriesURL = 'https://localhost:7150/api/Categories';
  productsReviewsURL = 'https://localhost:7150/api/ProductReviews';
  product:any;
  DBProducts: any[] = [];
  reviews: any[] = [];
  AllProducts=new Subject();
  DBProducts$ = new Subject();
  editMode=false;
  productEdit:any;
  constructor(private DBClient: HttpClient) {}
  //---------------------Api calls----------------
  addProduct(product:Product){
    console.log(product);
    
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    this.DBClient.post(this.productsURL,product,{headers:header}).subscribe(
      {next: (response) => {
          console.log("successful registration");
          // redirect to login page
          // this.router.navigate(['login']);
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
    
  }
  GetCategoriesFromDB() {
    return this.DBClient.get(this.categoriesURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
  GetProductsFromDB() {
    return this.DBClient.get(this.productsURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
  AddCurrentCustomerReview( body: any) {
    this.DBClient.post(this.productsReviewsURL, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    }).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  UpdateCurrentCustomerReview(id:number, body:any){
    this.DBClient.put(this.productsReviewsURL +"/"+id, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    }).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  RemoveCurrentCustomerReview(id:number, userEmail:string){
    this.DBClient.delete(this.productsReviewsURL +"/"+id +"?userEmail="+userEmail,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    }).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  //---------------------products methods----------------
  GetProductById(id: number) {
     this.DBClient.get(this.productsURL+"/"+id).subscribe(res=>this.product=res);
     console.log(this.product);
     return this.product;
     
  }
  SetProducts(products: Product[]) {
    this.DBProducts = products;
  }
  getProducts() {
    console.log(this.DBProducts);
    return this.DBProducts;
  }
  deleteProduct(id:number){
    this.DBClient.delete(this.productsURL+"/"+id).subscribe();
    console.log(this.productsURL+"/"+id);
}
  //---------------------products Reviews methods----------------
  GetProductReviewsFromDB() {
    return this.DBClient.get(this.productsReviewsURL);
  }
  SetReviews(revs: any) {
    this.reviews = revs;
  }
  GetReviewsByProductId(id: number) {
    let review = this.reviews.find((r) => r.product_Id == id);
    return review;
  }
  GetReviewsByProductIdAndEmail(id: number, userEmail:string) {
    let review = this.reviews.find((r) => r.product_Id == id && r.customerEmail == userEmail);
    return review;
  }

}

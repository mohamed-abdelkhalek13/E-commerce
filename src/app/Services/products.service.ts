import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  AllProducts=new  Subject();
  isThereProducts= new Subject();
  DBProducts$ = new Subject();
  editMode=false;
  productEdit:any;
  constructor(private DBClient: HttpClient) {}
  //---------------------Api calls----------------
  addProduct(product:Product){
    console.log(product);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.DBClient.post(this.productsURL,product,{headers:header});
  }
  editProduct(id:number,product:any){
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(id);
    console.log(product);
    this.DBClient.put(this.productsURL+"/"+id,product,{headers:header}).subscribe(res=>{
      console.log(res)
      return this.DBClient.get(this.productsURL, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).subscribe((res)=>{
        console.log(res);
        this.AllProductSubject.next(res);
      });
    });
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
      },
    });
  }
  GetAllProductsFromDB(){
      return this.DBClient.get(this.productsURL, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).subscribe({
        next:(res)=>{
          console.log(res);
          this.AllProductSubject.next(res);
          this.isThereProducts.next(true);
        },
        error:(error)=>{
          console.log("osama");
          this.isThereProducts.next(false);
        }
      }
      );
  }
  get statusofProducts():any{
    return this.isThereProducts;
  }
  get AllProductSubject(){
    return this.AllProducts;
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
    return this.DBClient.get(this.productsURL+"/"+id);
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
    return this.DBClient.get(this.productsURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).subscribe((res)=>{
      console.log(res);
      this.AllProductSubject.next(res);
    });
}
  //---------------------products Reviews methods----------------
  GetProductReviewsFromDB() {
    return this.DBClient.get(this.productsReviewsURL);
  }
  setReviewByProductId(id:number){
    console.log(id);
      this.DBClient.post(this.productsReviewsURL,{
        review: "_",
        rating: 3,
        product_Id: id,
        customerEmail: "elkholyo510@gmail.com"
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }).subscribe(res=>{
        console.log(res);
        
      })
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

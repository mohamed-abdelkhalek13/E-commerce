import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  DBProducts: any[] = [];
  DBProducts$ = new Subject();
  DBProductReviews$ = new Subject();
  keywordProducts:any[] = [];

  productsURL = 'https://localhost:7150/api/product';
  categoriesURL = 'https://localhost:7150/api/categories';

  reviews: any[] = [];
  productsReviewsURL = 'https://localhost:7150/api/ProductReviews';

  constructor(private DBClient: HttpClient) {
  }

  //---------------------Api calls----------------
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
  GetProductFromDBById(id:any) {
    return this.DBClient.get(this.productsURL + "/"+ id, {
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
    let product: {
      id: number;
      name: string;
      price: number;
      weight: number;
      decreption: string;
      stock: number;
      color: string;
      about: string;
      images: string[];
      category: string;
    } = this.DBProducts.find((p) => p.id == id);
    let adjustedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      weight: product.weight,
      decreption: product.decreption,
      stock: product.stock,
      color: product.color,
      about: product.about.split(','),
      images: product.images,
      category: product.category,
    };
    return adjustedProduct;
  }
  SetProducts(products: any) {
    this.DBProducts = products;
  }
  getProducts() {
    return this.DBProducts;
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
  StoreProductsFromAKeyword(keywordP:any){
    this.keywordProducts =keywordP;
  }
  GetProductsFromAKeyword(){
    return this.keywordProducts;
  }
}

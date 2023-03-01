import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product{
  name:string;
  price:number;
  weight:number;
  description:string;
  stock:number;
  about:string;
  color:string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL="https://localhost:7150/api/Product";
  constructor(private http:HttpClient) { }
  addProduct(product:Product){
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.URL,product,{headers:header}).subscribe(
      {
        next: (response) => {
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
  deleteProduct(id:number){
      this.http.delete(this.URL+'/'+id);
  }
}

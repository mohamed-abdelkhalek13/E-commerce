import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';

export interface Product{
  id:number;
  name:string;
  price:number;
  weight:number;
  description:string;
  stock:number;
  about:string;
  color:string;
  images:string[];
  category:string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService  implements OnInit{

  URL="https://localhost:7150/api/Product";
  productItem:Product;
  productList:Product[];
  editMode=false;
  constructor(private http:HttpClient) { 
  }
  ngOnInit(): void {
     console.log(this.productList);
  }
  getAllProduct():Product[]{
      this.http.get(this.URL).pipe(map((data)=>{
        const productList=[];
        for(const key in data){
          if(data.hasOwnProperty(key)){
            productList.push(data[key]);
          }
        }    
        return productList;      
      })).subscribe((productList)=>{
        this.productList=productList
      });  
     return this.productList;
  }
  getProductById(id:number){
    return this.http.get(this.URL+'/'+id);
  }
  addProduct(product:Product){
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.URL,product,{headers:header}).subscribe(
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
  deleteProduct(id:number){
      this.http.delete(this.URL+"/"+id).subscribe();
      console.log(this.URL+"/"+id);
  }
  editProduct(id:number,product:Product){
    this.http.put(this.URL+'/'+id,product).subscribe();
  }
}

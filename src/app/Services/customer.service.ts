import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  URL="https://localhost:7150/api/Customers";
  CustomerList=[];
  getAllCustomers(){
    return this.http.get(this.URL);
  }
  deleteCustomer(email:any){
    console.log(this.URL+"/"+email);
      this.http.delete(this.URL+"/"+email);
  }
}

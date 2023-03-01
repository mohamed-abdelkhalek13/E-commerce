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
    return this.fetchCustomers();
  }
  private fetchCustomers(){
    this.http.get(this.URL).pipe(map((data)=>{
      const CustomerList=[];
      for(const key in data){
        if(data.hasOwnProperty(key)){
          CustomerList.push(data[key]);
        }
      } 
      console.log(CustomerList);
      return CustomerList;   
    })).subscribe((CustomerList)=>{
      this.CustomerList=CustomerList
    });  
    
   return this.CustomerList;
}
}

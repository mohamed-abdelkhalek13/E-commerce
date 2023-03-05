import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http:HttpClient) { }

  url="https://localhost:7150/api/Orders"
  getall(){
    return this.http.get(this.url)
  }
  getbyid(id:any){
      return this.http.get(`${this.url}/${id}`)
  }
  updateitem(id:number,body:any){
    console.log(body);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url+"/"+id,body,{headers:header}).subscribe(res=>console.log(res))
  }

  additem(body:any){
    return this.http.post(this.url,body)
  }

  deleteitem(id:any){
    return this.http.delete(this.url+'/'+id)
  }
}

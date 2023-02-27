import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http:HttpClient) { }

  url="https://localhost:7150/api/Categories"

  getall(){
    return this.http.get(this.url)
  }



  getbyid(id:any){
return this.http.get(`${this.url}/${id}`)
  }


  updateitem(id:any,body:any){
    return this.http.put(this.url+'/'+id,body)
      }

      additem(body:any){
        return this.http.post(this.url,body)
      }

      deleteitem(id:any){
        return this.http.delete(this.url+'/'+id)
      }
}

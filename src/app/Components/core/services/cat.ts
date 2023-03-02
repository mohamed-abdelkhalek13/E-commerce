
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  
  URL="https://localhost:7150/api/Category";
  constructor(private http:HttpClient) {}
  getAllCategories(){
    this.http.get(this.URL).subscribe(data=>data)
  }
}

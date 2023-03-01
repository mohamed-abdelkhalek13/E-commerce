import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:any[] = [];
  constructor(private productsService: ProductsService){}
  ngOnInit(){
    this.productsService.GetCategoriesFromDB().subscribe({
      next: (DBCategories:any ) => {
        this.categories = DBCategories;
      },
      error: (err) => {
        throw Error(err);
      }
    })
  }
}

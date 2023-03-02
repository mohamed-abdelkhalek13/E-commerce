import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductsComponent } from '../../Pages/products/products.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute){}
  getAll(){
    this.productsService.DBProducts$.next(this.productsService.getProducts());
  }
}

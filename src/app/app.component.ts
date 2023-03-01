import { Component } from '@angular/core';
import { ProductService } from './Components/core/services/product-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-commerce';
  constructor(private productService :ProductService){
    this.productService.getAllProduct();
    console.log(this.productService.getAllProduct());
    
  }
}

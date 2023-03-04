import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productsList: any[] = [];
  quantity: number = 1;
  constructor(private service: CartService, private router: Router) {
    this.service = service;
  }
  ngOnInit(): void {
    this.productsList = this.service.getItems();
    console.log(this.productsList);
  }

  add(item) {
    if (item.quantity < item.stock) {
      item.quantity++;
    }
  }

  remove(item) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      // Remove the item from the productsList array
      const index = this.productsList.indexOf(item);
      if (index !== -1) {
        this.productsList.splice(index, 1);
      }
    }
  }

  orderNow() {
    const selectedProducts = this.productsList;

    this.router.navigate(['/checkout'], { state: { selectedProducts } });
  }
}

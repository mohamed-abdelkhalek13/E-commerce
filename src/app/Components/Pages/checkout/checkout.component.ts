import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  id!: number;
  name!: string;
  price!: number;
  quantity!: number;
  stock!: number;

  cartItems: any[] = [
    { id: 1, name: 'Product 1', price: 9.99, quantity: 1, stock: 5 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2, stock: 5 },
    { id: 3, name: 'Product 3', price: 29.99, quantity: 1, stock: 5 }
  ];

  subtotal(): number {
    let subtotal = 0;
    for (const item of this.cartItems) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  }

  discount: number = 0;

  shipping: number = 5;

  total(): number {
    const subtotal = this.subtotal();
    const total = subtotal - this.discount + this.shipping;
    return total;
  }

  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  incrementQuantity(item: any): void {
    if (item.quantity < item.stock) {
    item.quantity++;
  }}


}

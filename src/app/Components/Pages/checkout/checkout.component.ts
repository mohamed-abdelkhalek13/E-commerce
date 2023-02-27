import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  paymentMethod: string = 'payOnDelivery';
  isPayOnline: boolean = false;
  toggleForm(): void {
    const cardNumberInput = document.getElementById('card-number') as HTMLInputElement;
    const nameOnCardInput = document.getElementById('name-on-card') as HTMLInputElement;
    const expiryMonthSelect = document.getElementById('expiry-month') as HTMLSelectElement;
    const expiryYearSelect = document.getElementById('expiry-year') as HTMLSelectElement;
    const cvvInput = document.getElementById('cvv') as HTMLInputElement;
    const submitButton = document.getElementById('submit-button') as HTMLButtonElement;

    if (this.paymentMethod === 'payOnline') {
      this.isPayOnline = true;
      cardNumberInput.disabled = false;
      nameOnCardInput.disabled = false;
      expiryMonthSelect.disabled = false;
      expiryYearSelect.disabled = false;
      cvvInput.disabled = false;
    } else {
      this.isPayOnline = false;
      cardNumberInput.disabled = true;
      nameOnCardInput.disabled = true;
      expiryMonthSelect.disabled = true;
      expiryYearSelect.disabled = true;
      cvvInput.disabled = true;
    }
  }

  // ----------
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

  deleteItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index >= 0) {
      this.cartItems.splice(index, 1);
    }
  }

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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  selectedProducts: any[] = [];
  constructor(private router: Router, public http: HttpClient) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.selectedProducts = navigation.extras.state['selectedProducts'];
    }
  }

  ngOnInit() {
    console.log('list', this.selectedProducts);
  }
  //----------------
  paymentMethod: string = 'payOnDelivery';
  isPayOnline: boolean = false;
  toggleForm(): void {
    const cardNumberInput = document.getElementById(
      'card-number'
    ) as HTMLInputElement;
    const nameOnCardInput = document.getElementById(
      'name-on-card'
    ) as HTMLInputElement;
    const expiryMonthSelect = document.getElementById(
      'expiry-month'
    ) as HTMLSelectElement;
    const expiryYearSelect = document.getElementById(
      'expiry-year'
    ) as HTMLSelectElement;
    const cvvInput = document.getElementById('cvv') as HTMLInputElement;
    const submitButton = document.getElementById(
      'submit-button'
    ) as HTMLButtonElement;

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
    { id: 3, name: 'Product 3', price: 29.99, quantity: 1, stock: 5 },
  ];

  deleteItem(item: any) {
    const index = this.selectedProducts.indexOf(item);
    if (index >= 0) {
      this.selectedProducts.splice(index, 1);
    }
  }

  subtotal(): number {
    let subtotal = 0;
    for (const item of this.selectedProducts) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  }

  discount: number = 0;

  shipping: number = 50;

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
    }
  }
  inputValue: string;
  onSubmit() {
    const apiUrl = 'https://localhost:7150/api/Orders';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Update data object with new values
    const details = [];
    for (let i = 0; i < this.selectedProducts.length; i++) {
      details.push({
        productId: this.selectedProducts[i].id,
        quantity: this.selectedProducts[i].quantity,
      });
    }

    const amount = this.selectedProducts.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    const price = this.total();

    const order_Date = new Date().toISOString();
    const data = {
      amount: amount,
      price: price,
      shipping_Address: this.inputValue,
      order_Date: order_Date,
      order_Status: 'pending',
      customerEmail: localStorage.getItem('email'),
      details: details,
    };
    console.log(data);
    this.http.post(apiUrl, data, { headers }).subscribe({
      next: (response) => {
        console.log('successful add');
        // this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}

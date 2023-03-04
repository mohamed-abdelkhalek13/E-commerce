import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.css'],
})
export class ProductDetailsCardComponent {
  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  product: any = {};
  quantity = 1;
  imgIndex = 0;
  id: number = +this.activatedRoute.snapshot.params['productID'];
  ngOnInit() {
    this.productService
      .GetProductFromDBById(this.activatedRoute.snapshot.params['productID'])
      .subscribe({
        next: (data: any) => {
          console.log('data', data);
          let product: any = data;
          let array: any[] = data.about.split(',');
          let newProduct = { ...product, aboutArray: array };
          this.product = newProduct;
        },
      });
  }
  increase() {
    this.quantity++;
  }
  decrease() {
    if (this.quantity == 1) {
      this.quantity = 1;
    } else {
      this.quantity--;
    }
  }

  addToCart(item: any) {
    console.log(item);
    item.id = this.id;
    const items = this.cartService.getItems();
    items.push(item);
    const selectedProducts = items.map((i) => {
      return { ...i, quantity: this.quantity, productId: this.id };
    });
    this.cartService.setItems(selectedProducts);
    console.log('item: ', selectedProducts);
  }

  setImage0() {
    this.imgIndex = 0;
  }
  setImage1() {
    this.imgIndex = 1;
  }
  setImage2() {
    this.imgIndex = 2;
  }
}

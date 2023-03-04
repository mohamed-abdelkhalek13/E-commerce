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
  product: any = {};
  quantity = 1;
  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.product = this.productService.GetProductById(
      this.activatedRoute.snapshot.params['productID']
    );
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
    const id: number = +this.activatedRoute.snapshot.params['productID'];
    console.log(id);
    const items = this.cartService.getItems();
    items.push(item);
    const selectedProducts = items.map((i) => {
      return { ...i, quantity: this.quantity, productId: id };
    });
    this.cartService.setItems(selectedProducts);
    console.log('item: ', selectedProducts);
  }
}

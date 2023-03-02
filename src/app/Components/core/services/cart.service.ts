import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products:any[] = []
  private totalPrice:number =0;
  cartItemsCount = 0;
  productsCount$ = new Subject();

  constructor() {
  }
  ngOnInit(){
  }
  getCartItemsCount(){
    return this.cartItemsCount;
  }
  increaseCartItemsCount(){
    this.cartItemsCount = this.cartItemsCount + 1;
    console.log(this.cartItemsCount)
  }
  decreaseCartItemsCount(){
    this.cartItemsCount = this.cartItemsCount - 1;
  }

  setTotalPriceToZero(){
    this.totalPrice = 0;
  }
  getTotalPrice(){
    return  this.totalPrice;
  }
  increaseTotalPriceBy(price: number){
    this.totalPrice = this.totalPrice+price;
  }
  decreaseTotalPriceBy(price: number){
    this.totalPrice = this.totalPrice-price;
  }

  getProduct(){
    return this.products
  }
  setProduct(product:any){
    let productAlreadyExisted = this.products.find(p => p.id == product.id)
    if(productAlreadyExisted){
      productAlreadyExisted.quantity++;
    }else{
      this.products = [...this.products, product]
    }
    this.totalPrice = this.totalPrice+product.price*product.quantity;
    this.cartItemsCount = this.cartItemsCount+1;
    this.productsCount$.next(this.cartItemsCount);
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {


  productsList:any[] =[];
  totalPrice:number=0;
  constructor(private service: CartService){
    this.service = service;
  }

  ngOnInit(): void {
    this.productsList = this.service.getProduct();
    this.totalPrice =this.service.getTotalPrice();

}


addOne(id:any){
  let oldProduct = this.productsList.find(p => p.id == id);
  oldProduct.quantity++;
  this.service.increaseTotalPriceBy(oldProduct.price)
  this.service.increaseCartItemsCount();
  this.service.productsCount$.next(this.service.getCartItemsCount());

  this.totalPrice =this.service.getTotalPrice();
}
removeOne(id:any){
  let oldProduct = this.productsList.find(p => p.id == id);
  if(oldProduct.quantity !== 1){
    oldProduct.quantity--;
  } else{
    let newList = this.productsList.filter(p => p.id !== id)
    this.productsList = newList;
    if(this.productsList.length == 0){
      this.service.products = [];
    }
  }
  this.service.decreaseCartItemsCount();
  this.service.productsCount$.next(this.service.getCartItemsCount());
  this.service.decreaseTotalPriceBy(oldProduct.price)
  this.totalPrice =this.service.getTotalPrice();
}

}

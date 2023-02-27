import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.css']
})
export class ProductDetailsCardComponent {
  product = {
    "id": 1,
    "title": "laptop asus",
    "description": "2022 ASUS 14 Thin Light Business Student Laptop Computer, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 320 GB Storage, 12Hours Battery, Webcam, Zoom Meeting, Win11 + 1 Year Office 365, Black",
    "price": 229,
    "rating": 3,
    "brand": "Asus",
    "screenSize": "14 inches",
    "color": "black",
    "batteryLife": "12 hours",
    "category": "gaming",
    "thumbnail": "assets/images/asus.jpg",
  }
  quantity=1;
  increase(){
    this.quantity++;
  }
  decrease(){
    if(this.quantity == 1){
      this.quantity =1;
    }else{

      this.quantity--;
    }
  }
}

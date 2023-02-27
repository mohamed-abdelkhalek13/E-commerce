import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  staticData= [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      "id": 2,
      "title": "laptop hp",
      "description": "2021 HP Pavilion 15.6 HD Laptop Computer, Intel Pentium Processor, 8GB RAM, 128GB SSD, HD Webcam, USB-C, HDMI, Ethernet RJ-45, Windows 10 S, Red",
      "price": 350,
      "rating": 4.5,
      "brand": "Hp",
      "screenSize": "14 inches",
      "color": "red",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/hp.jpg",
    },
    {
      "id": 3.5,
      "title": "laptop msi ",
      "description": "MSI Modern 15A Thin and Light Daily Laptop: 15.6 FHD 1080p, Intel Core i7-1195G7, Intel Iris Xe, 8GB, 1TB SSD, Win10, Carbon Gray (A11MU-652)",
      "price": 650,
      "rating": 2,
      "brand": "Asus",
      "screenSize": "14 inches",
      "color": "black",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/msi.jpg",
    },
    {
      "id": 4,
      "title": "laptop hp",
      "description": "2021 HP Pavilion 15.6 HD Laptop Computer, Intel Pentium Processor, 8GB RAM, 128GB SSD, HD Webcam, USB-C, HDMI, Ethernet RJ-45, Windows 10 S, Red",
      "price": 400,
      "rating": 4.5,
      "brand": "Hp",
      "screenSize": "14 inches",
      "color": "white",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/hp-white.jpg",
    },
    {
      "id": 5,
      "title": "laptop asus ",
      "description": "2022 ASUS 14 Thin Light Business Student Laptop Computer, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 320 GB Storage, 12Hours Battery, Webcam, Zoom Meeting, Win11 + 1 Year Office 365, Black",
      "price": 229,
      "rating": 5,
      "brand": "Asus",
      "screenSize": "14 inches",
      "color": "black",
      "batteryLife": "12 hours",
      "category": "gaming",
      "thumbnail": "assets/images/asus2.jpg",
    },
  ]

  products:any = [];
  constructor(){}
  ngOnInit(){
    this.products = this.staticData.map(p => {
      let starsArray = new Array(Math.floor(p.rating)).fill('');
      let halfAStar = p.rating - Math.floor(p.rating);
      return {...p, ratingArray: starsArray, halfAStar:halfAStar}
    })
  }
}

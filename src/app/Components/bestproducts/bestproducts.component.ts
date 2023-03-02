import { Component } from '@angular/core';

@Component({
  selector: 'app-bestproducts',
  templateUrl: './bestproducts.component.html',
  styleUrls: ['./bestproducts.component.css']
})
export class BestproductsComponent {
  title = 'ngSlick';


  slides = [
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-58.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-38.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },

    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-58.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-38.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },

    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-58.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-38.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-58.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-38.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },

    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-58.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-38.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-58.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-38.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },

    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-58.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },
    {
      image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2023/01/Image00001-38.jpg?fit=1300%2C1300&ssl=1",
    Name:'DELL',
    Price:55000,

  },




];

  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false,
    // cssEase: 'linear',


  };

  addSlide() {
    this.slides.push()
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}

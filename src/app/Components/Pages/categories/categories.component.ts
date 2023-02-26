import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  cat:any;
  constructor() {
    this.cat=[
    {Name:'HP',Image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2022/04/HP-Logo.png?w=866&ssl=1" ,Counter:1 },
    {Name:'DELL',Image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2022/04/Dell-Logo.png?w=866&ssl=1" ,Counter:1 },
    {Name:'LENOVO',Image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2022/04/Lenovo-Logo.png?w=866&ssl=1" ,Counter:1 },
    {Name:'ASUS',Image:"https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png" ,Counter:1 },
    {Name:'APPLE',Image:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" ,Counter:1 },

    {Name:'MSI',Image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2022/04/MSI-Logo.png?w=866&ssl=1" ,Counter:1 },
    {Name:'ACER',Image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2022/04/Acer-Logo.png?w=866&ssl=1" ,Counter:1 },
    {Name:'ACER',Image:"https://i0.wp.com/www.awfarlak.com/wp-content/uploads/2022/04/Alienware-Logo.png?w=816&ssl=1" ,Counter:1 },


  ]
  }

  // cat:any;
  // constructor() {
  //   this.cat=[
  //   {Name:'HP',Image:"https://i.pinimg.com/originals/a4/39/51/a439512aa8185cd78694cb5f3eb76f11.png" ,Counter:1 },
  //   {Name:'DELL',Image:"https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png" ,Counter:1 },
  //   {Name:'LENOVO',Image:"https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-2003.png" ,Counter:1 },
  //   {Name:'ASUS',Image:"https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png" ,Counter:1 },
  //   {Name:'APPLE',Image:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" ,Counter:1 },

  //   {Name:'SAMSUNG',Image:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png" ,Counter:1 },


  // ]
  // }
}

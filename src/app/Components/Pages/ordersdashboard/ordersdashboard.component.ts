import { Component } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-ordersdashboard',
  templateUrl: './ordersdashboard.component.html',
  styleUrls: ['./ordersdashboard.component.css']
})
export class OrdersdashboardComponent {

 orders:any='';

   constructor(public server:OrdersService) {
    this.server.getall().subscribe({
      next:(data)=>{this.orders=data , console.log(this.orders)},
      error:(error)=>{console.log(error)}


    })

    
  }


}

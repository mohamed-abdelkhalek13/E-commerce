import { Component, ViewChild } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';
interface Details {
  productId:number;
  quantity:number;
}
@Component({
  selector: 'app-ordersdashboard',
  templateUrl: './ordersdashboard.component.html',
  styleUrls: ['./ordersdashboard.component.css']
})
export class OrdersdashboardComponent {

  orders:any='';
  showList=false;
  colorStatus="green";
  OrderStatus=["Pending","Arrived","Shipped"]
  details:Details[]=[];
   constructor(public server:OrdersService) {
    this.server.getall().subscribe({
      next:(data)=>{this.orders=data , console.log(this.orders)},
      error:(error)=>{console.log(error)}
    })
  }
  changeStatus(statusvalue,s){
      console.log(statusvalue.target.value);
      console.log(s);   
      s.order_Status= statusvalue.target.value ;
      s.products.forEach(element => {
          // id:string=element["id"];
          this.details.push({productId:element.id,quantity:element.quantity});
      });
      console.log(this.details);
      var order={amount:s.amount,price:s.price,shipping_Address:s.shipping_Address,order_Date:s.order_Date,order_Status:s.order_Status,customerEmail:s.customerEmail,details:this.details}
      console.log(order);
      
      this.server.updateitem(s.id,order)
  }
}

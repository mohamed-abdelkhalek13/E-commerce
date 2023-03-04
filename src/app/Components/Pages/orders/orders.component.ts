import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { OrdersService } from 'src/app/Services/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  {

  email: any;
  orders:any;







  fullNameSubscription!: any;
  constructor(
    public auth: AuthService,
    public server:OrdersService
  ) {
  }

  ngOnInit(): void {
    this.email = this.auth.email;
    this.fullNameSubscription = this.auth.fullNameSubject.subscribe(
      (mail: string) => {
        this.email = mail;
      }
    );


    this.server.getall().subscribe({
      next:(data:any)=>{
        let neworder:any[]=data
        this.orders=neworder.filter(x=>x.customerEmail=this.email),   console.log(neworder) },
      error:(error)=>{console.log(error)}


    })






  }


}

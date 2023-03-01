import { Component } from '@angular/core';
import { CustomerService } from '../../core/services/customer.service';
export interface PeriodicElement {
  id:number;
  Name: string;
  Email: string;
  ShippingAddress: string;
  Country:string;
  Phone: string;
  Gender:string;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  ELEMENT_DATA=[];
  constructor(private customerService:CustomerService){
    this.ELEMENT_DATA=this.customerService.getAllCustomers();
    console.log(this.ELEMENT_DATA);
    
  }
  displayedColumns: string[] = ['Position', 'Name', 'Email', 'ShippingAddress','Country','Phone','Gender','Delete'];
  dataSource = this.ELEMENT_DATA;
}

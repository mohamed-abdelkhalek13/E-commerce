import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

export interface PeriodicElement {
  id: number;
  Name: string;
  Email: string;
  ShippingAddress: string;
  Country: string;
  Gender: string;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  ELEMENT_DATA: any;
  constructor(private customerService: CustomerService) {
    this.customerService
      .getAllCustomers()
      .pipe(
        map((data) => {
          const CustomerList = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              CustomerList.push(data[key]);
            }
          }
          console.log(CustomerList);
          return CustomerList;
        })
      )
      .subscribe((CustomerList) => {
        this.ELEMENT_DATA = CustomerList;
      });
    console.log(this.ELEMENT_DATA);
    return this.ELEMENT_DATA;
  }
  deleteCustomer(email: any) {
    this.customerService.deleteCustomer(email);
  }
  displayedColumns: string[] = [
    'Position',
    'Name',
    'Email',
    'ShippingAddress',
    'Country',
    'Gender',
    'Delete',
  ];
}

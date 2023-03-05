import { NgxSpinnerService } from 'ngx-spinner';
import { Shipment } from './Shipment';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements Shipment, OnInit {
  trackingNumber!: string;
  carrier!: string;
  status!: 'pending' | 'shipping' | 'delivered';
  expectedDeliveryDate!: Date;
  email!: string;
  orderNumber!: string;

  constructor(
    private spinner: NgxSpinnerService,
    private orderService: OrdersService
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  shipments: Shipment[] = [
    {
      trackingNumber: '1',
      carrier: 'FedEx',
      status: 'shipping',
      expectedDeliveryDate: new Date('2023-03-02'),
      email: 'hello1@gmail.com',
    },
    {
      trackingNumber: '2',
      carrier: 'UPS',
      status: 'pending',
      expectedDeliveryDate: new Date('2023-03-01'),
      email: 'hello2@gmail.com',
    },
    {
      trackingNumber: '3',
      carrier: 'USPS',
      status: 'delivered',
      expectedDeliveryDate: new Date('2023-02-28'),
      email: 'hello3@gmail.com',
    },
  ];

  search(orderNumber: string): Shipment | undefined {
    console.log('a7a 2');
    return this.shipments.find(
      (shipment) => shipment.trackingNumber === orderNumber
    );
  }

  searchResult: Shipment | undefined;

  onSubmit(orderNumber: number) {
    this.searchResult = this.search(String(orderNumber));
    console.log('a7a');
    if (!this.searchResult) {
      // clear the search result if no match is found
      this.searchResult = undefined;
      return;
    }
  }
}

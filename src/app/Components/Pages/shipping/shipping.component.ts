import { Shipment } from './Shipment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements Shipment {
  trackingNumber!: string;
  carrier!: string;
  status!: 'pending' | 'shipping' | 'delivered';
  expectedDeliveryDate!: Date;
  email!:string;
  orderNumber!: string;

  shipments: Shipment[] = [
    { trackingNumber: '1234567890', carrier: 'FedEx', status: 'shipping', expectedDeliveryDate: new Date('2023-03-02'), email:'hello1@gmail.com' },
    { trackingNumber: '2345678901', carrier: 'UPS', status: 'pending', expectedDeliveryDate: new Date('2023-03-01'), email:'hello2@gmail.com' },
    { trackingNumber: '3456789012', carrier: 'USPS', status: 'delivered', expectedDeliveryDate: new Date('2023-02-28'), email:'hello3@gmail.com' }
  ];


  search(email: string, orderNumber: string): Shipment | undefined {
    console.log("a7a 2");
    return this.shipments.find(shipment =>
      shipment.email === email && shipment.trackingNumber === orderNumber
    );
  }

  searchResult: Shipment | undefined;

onSubmit(email: string, orderNumber: number) {
  this.searchResult = this.search(email, String(orderNumber));
  console.log("a7a");
  if (!this.searchResult) {
    // clear the search result if no match is found
    this.searchResult = undefined;
    return;
  }}
}

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

  shipments: Shipment[] = [
    { trackingNumber: '1234567890', carrier: 'FedEx', status: 'shipping', expectedDeliveryDate: new Date('2023-03-02') },
    { trackingNumber: '2345678901', carrier: 'UPS', status: 'pending', expectedDeliveryDate: new Date('2023-03-01') },
    { trackingNumber: '3456789012', carrier: 'USPS', status: 'delivered', expectedDeliveryDate: new Date('2023-02-28') }
  ];
}

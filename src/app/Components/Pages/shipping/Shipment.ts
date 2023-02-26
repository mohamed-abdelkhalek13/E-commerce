export interface Shipment {
  trackingNumber: string;
  carrier: string;
  status: 'pending' | 'shipping' | 'delivered';
  expectedDeliveryDate: Date;
}

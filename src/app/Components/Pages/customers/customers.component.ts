import { Component } from '@angular/core';
export interface PeriodicElement {
  Position:number;
  Name: string;
  Email: string;
  ShippingAddress: string;
  Country:string;
  Phone: string;
  Gender:string;
  Edit:string;
  Delete:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Position: 1, Name: 'osama', Email:"elkholyo510@gmail.com",ShippingAddress:"10th of Ramadan City",Country:"Egypt",Phone:"01119397043",Gender:"male",Edit:"Edit",Delete:"Delete"},
  {Position: 2, Name: 'zidan', Email:"mohamed zidan@gmail.com",ShippingAddress:"Zaqaziq",Country:"Egypt",Phone:"01151233884",Gender:"male",Edit:"Edit",Delete:"Delete"},
  {Position: 3, Name: 'abdelkhaleq', Email:"mohamedAbdelkhalq@gmail.com",ShippingAddress:"Zaqaziq",Country:"Egypt",Phone:"01158176476",Gender:"male",Edit:"Edit",Delete:"Delete"},
  {Position: 4, Name: 'elgendy', Email:"ahmedElgendy@gmail.com",ShippingAddress:"Sharqia",Country:"Egypt",Phone:"01119413082",Gender:"male",Edit:"Edit",Delete:"Delete"},
  {Position: 5, Name: 'Khaled', Email:"KhaledIbrahim@gmail.com",ShippingAddress:"Belbis",Country:"Egypt",Phone:"01140849506",Gender:"male",Edit:"Edit",Delete:"Delete"},
];
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  displayedColumns: string[] = ['Position', 'Name', 'Email', 'ShippingAddress','Country','Phone','Gender','Edit','Delete'];
  dataSource = ELEMENT_DATA;
}

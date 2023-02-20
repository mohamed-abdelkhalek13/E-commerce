import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string ='';
  password: string = '';

  constructor() {}


  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully');
      // logic to handle form submission
    }else {
      console.log('Form is invalid');
      // logic to display an error message to the user
    }
  }



}

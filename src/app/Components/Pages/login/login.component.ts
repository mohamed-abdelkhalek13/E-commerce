import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully');
      console.log(form.value);
      // logic to handle form submission
      this.http
      .post('https://localhost:7150/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('tokenExpiration', response.expiration);
          localStorage.setItem('roles', JSON.stringify(response.roles));
          localStorage.setItem('email', JSON.stringify(response.email));

          console.log("Done");
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          this.errorMessage = 'Invalid email or password';
        }
      });
      } else {
        console.log('Form is invalid');
      }
    }
  }


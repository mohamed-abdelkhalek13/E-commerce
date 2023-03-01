import { Component, NgZone } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully');
      console.log(form.value);
      // logic to handle form submission
      this.auth
        .logIn({ email: this.email, password: this.password })
        .subscribe({
          next: (response: any) => {
            console.log(response.message);
            this.auth.setToken(
              response.token,
              response.expiration,
              response.roles,
              response.name,
              response.email
            );
            console.log('Done');
            this.router.navigate(['/']);
          },
          error: (error: any) => {
            this.errorMessage = 'Invalid email or password';
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }
}

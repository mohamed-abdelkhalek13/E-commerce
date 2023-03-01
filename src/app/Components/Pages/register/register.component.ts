import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        user_Name: [
          '',
          [Validators.required, Validators.pattern(/^[a-z0-9]{4,20}$/)],
        ],
        first_Name: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)],
        ],
        last_Name: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)],
        ],
        gender: ['', Validators.required],
        country: ['', Validators.required],
        default_Shipping_Address: ['', Validators.required],
        phone_Number: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(010|011|012|015)[0-9]{8}$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const passwordConfirm = formGroup.get('confirmPassword')?.value;

    if (password !== passwordConfirm) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else if (!passwordConfirm) {
      formGroup.get('confirmPassword')?.setErrors({ required: true });
      return { required: true };
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
      return null;
    }
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      console.log('Form is invalid');
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const data = {
      user_Name: this.registrationForm.controls['user_Name'].value,
      first_Name: this.registrationForm.controls['first_Name'].value,
      last_Name: this.registrationForm.controls['last_Name'].value,
      gender: this.registrationForm.controls['gender'].value,
      country: this.registrationForm.controls['country'].value,
      default_Shipping_Address:
        this.registrationForm.controls['default_Shipping_Address'].value,
      phone_Number: this.registrationForm.controls['phone_Number'].value,
      email: this.registrationForm.controls['email'].value,
      password: this.registrationForm.controls['password'].value,
    };
    console.log(data);
    // perform form submission action
    const currentRoute = this.router.url;
    console.log(currentRoute);
    let apiUrl = 'https://localhost:7150/register';
    if (currentRoute === '/register-admin') {
      apiUrl = 'https://localhost:7150/register-admin';
    }

    this.http.post(apiUrl, data, { headers }).subscribe({
      next: (response) => {
        console.log('successful registration');
        // redirect to login page
        this.router.navigate(['login']);
      },
      error: (error) => {
        this.errorMessage = 'Username or Email already exists';
        console.error(error);
        // handle error
      },
    });
  }
}

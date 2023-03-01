import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService, private spinner: NgxSpinnerService) {}

  fullName: any;
  role: any;
  ngOnInit(): void {
    this.fullName = this.auth.fullName;
    if (this.auth.role) {
      this.role = this.auth.role.replace(/[\[\]"]/g, '');
    }

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}

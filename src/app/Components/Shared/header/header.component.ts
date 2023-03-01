import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  fullName: any;
  fullNameSubscription!: Subscription;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.fullName = this.auth.fullName;
    this.fullNameSubscription = this.auth.fullNameSubject.subscribe(
      (name: string) => {
        this.fullName = name;
      }
    );
  }

  ngOnDestroy(): void {
    this.fullNameSubscription.unsubscribe();
  }

  logOut() {
    this.auth.logOut();
  }
  logIn() {
    this.auth.isLoggedIn();
  }
}

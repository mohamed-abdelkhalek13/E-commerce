import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7150/';

  public decodedToken: any;
  public fullNameSubject: Subject<string> = new Subject<string>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {
    const token = this.getToken();
    if (token) {
      this.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  register(data: any) {
    return this.http.post<any>(this.baseUrl + '', data);
  }

  logIn(data: any) {
    return this.http.post<any>(this.baseUrl + 'login', data);
  }

  setToken(
    tokenValue: string,
    tokenExpiration: any,
    roles: any,
    name: string,
    email: string,
    id: string
  ) {
    localStorage.setItem('token', tokenValue);
    localStorage.setItem('tokenExpiration', tokenExpiration);
    localStorage.setItem('roles', JSON.stringify(roles));
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id);
    this.fullNameSubject.next(name);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['/']);
  }

  // get fullName(): string {
  //   return this.decodedToken
  //     ? this.decodedToken[
  //         'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
  //       ]
  //     : '';
  // }

  get fullName() {
    return localStorage.getItem('name');
  }
  // get role(): string {
  //   return this.decodedToken
  //     ? this.decodedToken[
  //         'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
  //       ]
  //     : '';
  // }

  get role() {
    return localStorage.getItem('roles');
  }
}

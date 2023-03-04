import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  role: string = '';
  canActivate(): boolean {
    if (this.auth.role) {
      this.role = this.auth.role.replace(/[\[\]"]/g, '');
    }
    if (this.role === 'Admin') {
      return true;
    } else {
      this.router.navigate(['**']);
      return false;
    }
  }
}

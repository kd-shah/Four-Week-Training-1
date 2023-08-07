import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class homeGuard {
  constructor(public authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    else{
      return this.router.parseUrl('/login');
    }
  }
}

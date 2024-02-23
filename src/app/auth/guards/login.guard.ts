import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn().then((userLoggedIn) => {
      if (!userLoggedIn) {
        if (route.routeConfig?.path != 'home') {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      } else {
        if (route.routeConfig?.path === 'home') {
          this.router.navigate(['default/index']);
        }
        return true;
      }
    }).catch((error) => {
      console.error('Error checking user login status:', error);
      this.router.navigate(['/home']);
      return false;
    });
  }
}

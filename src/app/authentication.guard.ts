import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate  {
  constructor(private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // here we will setup a statement for firebase to say if the user is still logged in //
      // if they arent still logged in, then we boot them back to the main login screen //
      const loggedIn = Math.random() > 0.5 ? true : false;

      if (!loggedIn) {
        this.router.navigate(['/']);
      }

      console.log('Boolean value for logged out is ' + loggedIn);
      return loggedIn;
    }
}

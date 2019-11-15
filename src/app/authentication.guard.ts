import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCentralService } from './user-central.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate  {
  constructor(private router: Router, public auth: AngularFireAuth,
    private UserCentral: UserCentralService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

   

      this.auth.auth.onAuthStateChanged((user) => {
        if (user != null) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/login']);
          
        }
      });
      return true;
    }
}

import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserCentralService {

  constructor(
    public firebase: FirebaseService,
    public authService: AuthService
  ) { }

  public payload;

  getUserProfile(){
    
  }
  setUserProfile(){
    this.firebase.getProfileInfo(this.authService.getUser()).subscribe(res => {
      this.payload = res.map(a => {
        return{
          
          
        };
      });
    });
  }
}

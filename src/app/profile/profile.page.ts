import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private authService:AuthService,
    private firebase: FirebaseService,
    private location: Location
  ) { }

  private eMail;
  public payload;
  ngOnInit() {
    this.eMail = this.authService.getUser();
    this.profile(this.eMail);
  }
  profile(x){
    this.firebase.getProfileInfo(this.eMail).subscribe(
      res =>{
        if(res.length === 0){
          console.log('you are fucked');
        }
        this.payload = res.map(a =>{
          return{
            user: a.payload.doc.data().User_Name,
            fName: a.payload.doc.data().User_F_Name,
            lName: a.payload.doc.data().User_L_Name,
            email: a.payload.doc.data().email,
            pictureURL: a.payload.doc.data().Picture
          }
        })
      }
    )
  }
  back() {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private authService:AuthService,
    private firebase: FirebaseService
  ) { }

  private eMail;
    public payload;
  ngOnInit() {
    this.eMail = this.authService.getUser();
    console.log(this.eMail);
    this.firebase.pullMael(this.eMail).subscribe(
      res =>{
        if(res.length === 0){
          console.log('you are fucked');
        }
        this.payload = res.map(a =>{
          return{
            user: a.payload.doc.data().User_Name
          }
        })
      }
    )
  }

}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public auth: AuthService ) { }

  // logging out the user //
  logoutOnClick() {
    this.auth.auth.signOut();
  }

}

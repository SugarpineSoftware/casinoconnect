import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public auth: AngularFireAuth ) { }

  // logging out the user //
  logoutOnClick() {
    this.auth.auth.signOut();
  }

}

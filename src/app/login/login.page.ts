import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { AuthService } from 'src/app/auth.service';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

   emailText: string;
   passwordText: string;

  constructor(public service: FirebaseService, public auth: AuthService) {}

  loginOnClick() {
     this.auth.loginUser(this.emailText, this.passwordText).then(
       () => this.loginSuccess(),
       () => this.loginFailure()
     );
  }

  signUpOnClick() {
    this.auth.createUser(this.emailText, this.passwordText).then(
      () => this.signUpSuccess(),
      () => this.signUpFailure()
    );
  }


  loginSuccess() {
    console.log('success logging in');
  }

  loginFailure() {
    console.log('failure logging in');
  }

  signUpSuccess() {
    console.log('success signing up');
  }

  signUpFailure() {
    console.log('failure signing up');
  }
}

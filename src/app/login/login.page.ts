import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { AuthService } from 'src/app/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

   emailText: string;
   passwordText: string;


  constructor(public service: FirebaseService,
              public auth: AuthService,
              public router: Router) {}

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
    this.router.navigate(['/']);
  }

  loginFailure() {
    console.log('failure logging in');
    // this.router.navigate(['/login']);
  }


  signUpSuccess() {
    console.log('success signing up');
    this.router.navigate(['/']);
  }

  signUpFailure() {
    console.log('failure signing up');
  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { AuthService } from 'src/app/auth.service';
import { Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage{

   emailText: string;
   passwordText: string;


  constructor(public service: FirebaseService,
              public auth: AuthService,
              public router: Router,
              public alertController: AlertController) {}


  

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
    this.presentAlert('Error Signing in', 'There was an error signing in',
    'Please re-enter your loggin credentials and try signing in again');
  }


  signUpSuccess() {
    console.log('success signing up');
  }

  signUpFailure() {
    this.presentAlert('Error Creating account', 'There was an error creating an account',
    'Please re-enter your account credentials and try creating an account again');
  }


  // presenting an alert //
  async presentAlert(fHeader: string, subHeaderString: string, messageString: string) {
    const alert = await this.alertController.create({
      header: fHeader,
      subHeader: subHeaderString,
      message: messageString,
      buttons: ['OK']
    });

    await alert.present();
  }
}

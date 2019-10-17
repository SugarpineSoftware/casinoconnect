import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { AuthService } from 'src/app/auth.service';
import { Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Alert } from '../../../node_modules/@types/selenium-webdriver';


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
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error Signing in',
      subHeader: 'There was an error signing in',
      message: 'Please re-enter your loggin credentials and try signing in again',
      buttons: ['OK']
    });

    await alert.present();
  }


  signUpSuccess() {
    console.log('success signing up');
  }

  signUpFailure() {
    console.log('failure signing up');
  }
}

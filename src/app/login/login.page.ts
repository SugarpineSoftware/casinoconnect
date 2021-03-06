import { Component, OnInit} from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { AuthService } from 'src/app/auth.service';
import { Router} from '@angular/router';
import { AlertController, ModalController} from '@ionic/angular';
import { SignUpPage } from 'src/app/sign-up/sign-up.page';
import { FormBuilder, Validators } from '@angular/forms';



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
              public alertController: AlertController,
              public modalController: ModalController,
              public formBuilder: FormBuilder) {}

  get emailProperty() {
    return this.validationForm.get('email');
  }
  get passwordProperty() {
    return this.validationForm.get('password');
  }

 // this is the validation group for the input text fields //
  validationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9*-]+.[a-zA-Z]{2,4}$')]],
    password: ['', [Validators.required, Validators.maxLength(100)]]
  });


  loginOnClick() {
    this.emailText = this.validationForm.value.email;
    this.passwordText = this.validationForm.value.password;

    this.auth.loginUser(this.emailText, this.passwordText).then(
      () => this.loginSuccess(),
      () => this.loginFailure()
    );
  }

  signUpOnClick() {
    this.presentSignUp();
  }


  async presentSignUp() {
    const modal = await this.modalController.create({
      component: SignUpPage,
    });

    modal.onDidDismiss().then((returnedData) => {
      if (returnedData !== null) {
        // this is the returned functions for the modal//
        // popup for the machine that is scanned //
      }
    });
    return await modal.present();
  }


  loginSuccess() {
    console.log('success logging in');
  }

  loginFailure() {
    console.log('failure logging in');
    this.presentAlert('Error Signing in', 'There was an error signing in',
    'Please re-enter your login credentials and try signing in again');
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

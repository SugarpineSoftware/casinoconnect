import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/firebase.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public email;
  public password;
  public firstName;
  public lastName;
  public userName;

  constructor(
    public modalController: ModalController,
    public auth: AuthService,
    public service: FirebaseService,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  signUpOnClick() {
    this.auth.createUser(this.email, this.password).then(
      () => this.signUpSuccess(),
      () => this.signUpFailure()
    );
  }

  signUpSuccess() {
    console.log('success signing up');

    // from here, we need to create the user profile under 'Profile' //
    // in the database //
    this.service.saveUserProfileToDatabase(this.email,
      this.password,
      this.firstName,
      this.lastName,
      this.userName);

    this.modalController.dismiss();
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

  cancel() {
    this.modalController.dismiss();
  }
}

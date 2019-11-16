import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/firebase.service';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValueConverter } from '../../../node_modules/@angular/compiler/src/render3/view/template';

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

  get emailProperty() {
    return this.validationForm.get('email');
  }
  get passwordProperty() {
    return this.validationForm.get('password');
  }
  get firstNameProperty() {
    return this.validationForm.get('firstName');
  }
  get lastNameProperty() {
    return this.validationForm.get('lastName');
  }
  get userNameProperty() {
    return this.validationForm.get('userName');
  }


  // this is the validation group for the input text fields //
  validationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9*-]+.[a-zA-Z]{2,4}$')]],
    password: ['', [Validators.required, Validators.maxLength(100)]],
    firstName: ['', [Validators.required, Validators.maxLength(100)]],
    lastName: ['', [Validators.required, Validators.maxLength(100)]],
    userName: ['', [Validators.required, Validators.maxLength(100)]]
  });

  constructor(
    public modalController: ModalController,
    public auth: AuthService,
    public service: FirebaseService,
    public alertController: AlertController,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
  }


  signUpOnClick() {
    console.log(this.validationForm.value);
    /*
    this.auth.createUser(this.email, this.password).then(
      () => this.signUpSuccess(),
      () => this.signUpFailure()
    );*/
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

import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as CryptoJS from 'crypto-js';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  qrData = 'Serial Number';
  constructor(private barcodeScanner: BarcodeScanner,
              private auth: AngularFireAuth,
              public alertController: AlertController) {
  }

  public encrypted: string;
  public decrypted: string;
  private SECRET_KEY: string = "LodonGreen";
  codeDecryption(){
    this.decrypted = CryptoJS.AES.decrypt(this.encrypted,this.SECRET_KEY).toString(CryptoJS.enc.Utf8);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'QR Data',
      subHeader: this.encrypted,
      message: this.decrypted,
      buttons: ['OK']
    });

    await alert.present();
  }
  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
         this.encrypted = barcodeData.text;
         this.codeDecryption();
         this.presentAlert();
      }
    );
  }
}

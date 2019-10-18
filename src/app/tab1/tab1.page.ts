import { Component } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';



const Bally = {manufacture: 'Bally', type: [ 'S6000', 'S9000']};
const IGT = {manufacture: 'IGT', type: ['S2000', 'GameKing', 'Igame', 'S3000', 'Crystal Core', 'Crystal Duo']};
const Aristocrat = {manufacture: 'Aristocrate', type: [ 'MKVI', 'Viridian', 'Helix']};

const DropDownList = [Bally, IGT, Aristocrat];

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  qrData = 'Serial Number';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  constructor(private barcodeScanner: BarcodeScanner,
              private base64ToGallery: Base64ToGallery,
              private toastCtrl: ToastController,
              private auth: AngularFireAuth) {
  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        // this.scannedCode = barcodeData.text;
      }
    );
  }

  // logging out the user //
  logoutOnClick() {
    this.auth.auth.signOut();
  }


  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/png').toString();

    const data = imageData.split(',')[1];

    this.base64ToGallery.base64ToGallery(data,
      { prefix: '_img', mediaScanner: true})
      .then(async res => {
        const toast = await this.toastCtrl.create({
          header: 'QR Code saved'
        });
        toast.present();
      }, err => console.log('err: ', err)
      );
  }
}

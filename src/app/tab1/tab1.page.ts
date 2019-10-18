import { Component } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

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
}

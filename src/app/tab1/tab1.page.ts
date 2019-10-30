import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import * as CryptoJS from 'crypto-js';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  qrData = 'Serial Number';
  constructor(private barcodeScanner: BarcodeScanner,
              private firebase: FirebaseService,
              public alertController: AlertController) {
  }

  public encrypted: string;
  public decrypted: string;

  // holds all the return information from firebase firestore //
  public payload;
  private SECRET_KEY = 'LondonGreen';

  codeDecryption() {
    this.decrypted = CryptoJS.AES.decrypt(this.encrypted, this.SECRET_KEY).toString(CryptoJS.enc.Utf8);
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
        // accessing the firebase firestore and returning the information within //
        // the snapshot taken in firebase.service.ts //
        this.firebase.newScan(this.decrypted).subscribe(res => {
          this.payload = res.map(a => {
            return {
              cabinet: a.payload.doc.data().cabinet,
              theme: a.payload.doc.data().theme,
              machine_number: a.payload.doc.data().machine_number,
              bank: a.payload.doc.data().bank,
              asset_number: a.payload.doc.data().asset_number,
              manufacture: a.payload.doc.data().manufacture
            };
          });
        });
      }
    );
  }
}

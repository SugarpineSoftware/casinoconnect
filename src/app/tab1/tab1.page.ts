import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import * as CryptoJS from 'crypto-js';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/firebase.service';
import { present } from '../../../node_modules/@ionic/core/dist/types/utils/overlays';

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


  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.encrypted = barcodeData.text;
        this.codeDecryption();





        // accessing the firebase firestore and returning the information within //
        // the snapshot taken in firebase.service.ts //
        this.firebase.newScan(this.decrypted).subscribe(res => {

          // when the length of res is 0, that means that there was no entry in the //
          // database.  Present an alert to the user //
          if (res.length === 0) {
            this.presentAlert('No Entry Found', '',
            'There was no entry found in the database.  Please try again');
          }

          this.payload = res.map(a => {
            return {
              cabinet: a.payload.doc.data().Cabinet,
              theme: a.payload.doc.data().Theme,
              machine_number: a.payload.doc.data().Machine_Number,
              bank: a.payload.doc.data().Bank,
              asset_number: a.payload.doc.data().Asset,
              manufacture: a.payload.doc.data().Manufacture
            };
          });
        });
      }
    );
  }
}

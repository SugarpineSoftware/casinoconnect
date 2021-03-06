import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import * as CryptoJS from 'crypto-js';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { FirebaseService } from 'src/app/firebase.service';
import { ScanModalPage } from '../scan-modal/scan-modal.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DataPassService } from '../data-pass.service';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit{
  qrData = 'Serial Number';
  constructor(private barcodeScanner: BarcodeScanner,
              private firebase: FirebaseService,
              public alertController: AlertController,
              public modalController: ModalController,
              public auth: AngularFireAuth,
              public router: Router,
              public dataPass: DataPassService,
              public authService: AuthService,
              public menu: MenuController
              ) {
  }

  public encrypted: string;
  public decrypted: string;

  // holds all the return information from firebase firestore //
  public payload;
  
  private SECRET_KEY = 'LondonGreen';

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit(){
  
  }


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

    // presenting a modal popup where the user decides what to do with this //
  // newly generated qr code //
  async presentQR(qrData) {
    const modal = await this.modalController.create({
      component: ScanModalPage,
      componentProps: {
        title: 'New QR Code',
        encryptedData: qrData
      }
    });

    modal.onDidDismiss().then((returnedData) => {
      if (returnedData !== null) {
        // this is the returned functions for the modal//
        // popup for the machine that is scanned //
        if (returnedData.data === 0) {

        } else if (returnedData.data === 1) {

        } else if (returnedData.data === 2) {

        }
      }
    });
    return await modal.present();
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

          // this is what has changed.... //
          this.payload = res.map(a => {
            return a.payload.doc.data();
          });

          /* this was the old way of doing retrieving the data
          this.payload = res.map(a => {
            return {
              cabinet: a.payload.doc.data().Cabinet,
              theme: a.payload.doc.data().Theme,
              machineNumber: a.payload.doc.data().Machine_Number,
              bank: a.payload.doc.data().Bank,
              assetNumber: a.payload.doc.data().Asset,
              manufacturer: a.payload.doc.data().Manufacturer,
              area: a.payload.doc.data().Area,
              billValidator: a.payload.doc.data().Bill_Validator,
              billValidatorFirmware: a.payload.doc.data().Bill_Validator_Firmware,
              encrypted: a.payload.doc.data().EncryptedCode,
              inService: a.payload.doc.data().In_Service,
              keychip1: a.payload.doc.data().KeyChip1,
              keychip2: a.payload.doc.data().KeyChip_2,
              machineDenom: a.payload.doc.data().Machine_Denom,
              maxBet: a.payload.doc.data().Max_Bet,
              onFloor: a.payload.doc.data().On_Floor,
              payTableId: a.payload.doc.data().PayTable_Id,
              printer: a.payload.doc.data().Printer,
              printerFirmware: a.payload.doc.data().Printer_Firmware,
              serial: a.payload.doc.data().Serial,
              isLeased: a.payload.doc.data().Is_Leased
            };
          }); */
          // presenting the information //
          this.presentQR(this.payload);
        });
      }
    );
  }

  logoutOnClick() {
    this.auth.auth.signOut();
  }
  profile(){
   this.router.navigateByUrl('profile');
  }
}

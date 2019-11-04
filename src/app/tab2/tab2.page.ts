import { Component } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as CryptoJS from 'crypto-js';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  qrData: string;
  scannedCode = null;
  elementType = 'canvas';
  constructor(
              private base64ToGallery: Base64ToGallery,
              private toastCtrl: ToastController,
              private auth: AngularFireAuth,
              private firebaseService: FirebaseService) {
  }


  // this is the array that is created for the drop down lists of trypes when the manufacturer is selected
  public selectedType: any[];

  // this is the selected manufacturer for the drop down list
  public sManu: any;
  // this is the selected type for the drop down
  public sType: any;

  // this is our AES encryption is based off of
  private SECRET_KEY = 'LondonGreen';

  // this string is the encrypted version of "fullQrData" string
  public encryptQrData: string;

  // this is a string created from the manufacturer / type / serialnumber
  public fullQrData: string;

  // Manufacturers of Machines array used for dropdown selectors while creating QR
  manufacturers: any[] = [
    { id: 0, manufacture: 'Bally'},
    { id: 1, manufacture: 'IGT'},
    { id: 2, manufacture: 'Aristocrat'},
    { id: 3, manufacture: 'Konami'},
    { id: 4, manufacture: 'Everi'},
    { id: 5, manufacture: 'AGS'},
    { id: 6, manufacture: 'Ainsworth'},
    { id: 7, manufacture: 'Incredible Technologies'},
    { id: 8, manufacture: 'SG'},
    { id: 9, manufacture: 'Interblock'},
    { id: 10, manufacture: 'Aruze'},
    { id: 11, manufacture: 'Williams'}
  ];

  // Types of Machines array used for dropdown selectors while creating QR
  // manuId refers to the manufacturer ID
  types: any[] = [
    { manuId: 0, type: 'S6000'},
    { manuId: 0, type: 'S9000'},
    { manuId: 1, type: 'S2000'},
    { manuId: 1, type: 'Gameking'},
    { manuId: 2, type: 'MKVI'},
    { manuId: 2, type: 'Viridian'},
    { manuId: 2, type: 'Helix'},
    { manuId: 3, type: 'Podium'},
    { manuId: 3, type: 'Concerto'},
    { manuId: 3, type: 'Avantage'},
    { manuId: 4, type: 'M11'},
    { manuId: 4, type: 'Player Classic'},
    { manuId: 5, type: 'Orion'},
    { manuId: 6, type: '660'},
    { manuId: 6, type: '560'},
    { manuId: 7, type: 'Infinity'},
    { manuId: 8, type: 'Twinstar'},
    { manuId: 9, type: 'Roulette'},
    { manuId: 10, type: 'Innovator'},
    { manuId: 11, type: 'Bluebird'},
    { manuId: 11, type: 'Bluebird 2'},
    { manuId: 11, type: 'Blade'}

  ];

  area: number;
  assetNumber: number;
  bank: number;
  billValidator: string;
  billValidatorFirmware: string;
  cabinet: string;
  encrypted: string;
  inService: boolean;
  keychip: string;
  keychip2: string;
  machine: number;
  machineDenom: string;
  manufacturer: string;
  maxBet: number;
  onFloor: boolean;
  paytableId: string;
  playerDenom: string[];
  printer: string;
  printerFirmware: string;
  serial: string;
  theme: string;






  // Uses The Value Of The Manufacturer Dropdown To Create The Type Array
  setTypeValue(sManu) {
    this.selectedType = this.types.filter(type => type.manuId === sManu.id);
  }

  test() {
    console.log(this.encryptQrData);
  }

  // takes "fullQrData" and encrypts the data into "encryptQrData" then creates the QR code out of the encrypted data
  createQR() {
    this.fullQrData = this.sManu.manufacture + '/' + this.sType.type + '/' + this.qrData;
    this.encryptQrData = CryptoJS.AES.encrypt(this.fullQrData, this.SECRET_KEY).toString();

    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/png').toString();
    const data = imageData.split(',')[1];
    this.test();
  }

  // THIS NEEDS WORK!!!
  // this should give the user the ability to save the qr code in a designated location
  // this should appear after the qr is created
  downloadQR() {

    this.firebaseService.saveQRToDataBase("Sugarpine Slots",this.encryptQrData,this.manufacturer,this.cabinet,this.area,this.bank,this.machine,this.assetNumber,this.serial,this.billValidator,this.billValidatorFirmware,this.inService,this.keychip,this.keychip2,this.machineDenom,this.maxBet,this.onFloor,this.paytableId,this.printer,this.printerFirmware,this.theme);
   /* const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL().toString();

    const base64Data = imageData.split(',')[1];
    this.base64ToGallery
    .base64ToGallery(base64Data).then(
      res => console.log('Saved image to gallery:', res),
      err => console.log('Error saving image to gallery:', err)
      
  );*/
  }
}

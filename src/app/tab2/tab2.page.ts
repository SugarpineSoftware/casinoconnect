import { Component } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  qrData = 'Serial Number';
  scannedCode = null;
  elementType = 'canvas';
  constructor(
              private base64ToGallery: Base64ToGallery,
              private toastCtrl: ToastController,
              private auth: AngularFireAuth) {
  }
  

  public selectedType: any[];

  public sManu: any;
  public sType: any;

  private SECRET_KEY: string = "LodonGreen";
  public encryptQrData: string;
  public decryptQrData: string;
  public fullQrData: string;

  //Manufacturers of Machines array used for dropdown selectors while creating QR
  manufacturers: any[] = [
    { id:0, manufacture: 'Bally'},
    { id:1, manufacture: 'IGT'},
    { id:2, manufacture: 'Aristocrat'},
    { id:3, manufacture: 'Konami'},
    { id:4, manufacture: 'Everi'},
    { id:5, manufacture: 'AGS'},
    { id:6, manufacture: 'Ainsworth'},
    { id:7, manufacture: 'Incredible Technologies'},
    { id:8, manufacture: 'SG'},
    { id:9, manufacture: 'Interblock'},
    { id:10, manufacture: 'Aruze'},
    { id:11, manufacture: 'Williams'}
  ];

  //Types of Machines array used for dropdown selectors while creating QR
  // manuId refers to the manufacturer ID
  types: any[] = [
    { manuId:0, type:'S6000'},
    { manuId:0, type:'S9000'},
    { manuId:1, type:'S2000'},
    { manuId:1, type:'Gameking'},
    { manuId:2, type:'MKVI'},
    { manuId:2, type:'Viridian'},
    { manuId:2, type:'Helix'},
    { manuId:3, type:'Podium'},
    { manuId:3, type:'Concerto'},
    { manuId:3, type:'Avantage'},
    { manuId:4, type:'M11'},
    { manuId:4, type:'Player Classic'},
    { manuId:5, type:'Orion'},
    { manuId:6, type:'660'},
    { manuId:6, type:'560'},
    { manuId:7, type:'Infinity'},
    { manuId:8, type:'Twinstar'},
    { manuId:9, type:'Roulette'},
    { manuId:10, type:'Innovator'},
    { manuId:11, type:'Bluebird'},
    { manuId:11, type:'Bluebird 2'},
    { manuId:11, type:'Blade'}

  ];

  // Uses The Value Of The Manufacturer Dropdown To Create The Type Array
  setTypeValue(sManu){
    console.log(sManu.id);
    this.selectedType = this.types.filter(type => type.manuId === sManu.id); 
  
  }

  test(){
    this.fullQrData = this.sManu.manufacture + "/" + this.sType.type +"/"+ this.qrData;
   this.encryptQrData = CryptoJS.AES.encrypt(this.fullQrData, this.SECRET_KEY).toString();
    this.decryptQrData = CryptoJS.AES.decrypt(this.encryptQrData,this.SECRET_KEY).toString(CryptoJS.enc.Utf8);
    console.log(this.encryptQrData);
    console.log(this.decryptQrData);
  }


  downloadQR() {
    
  this.test();
  
    
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

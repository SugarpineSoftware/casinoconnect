import { Component } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';






@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  qrData = 'Serial Number';
  scannedCode = null;
  elementType = 'canvas';
  constructor(private barcodeScanner: BarcodeScanner,
              private base64ToGallery: Base64ToGallery,
              private toastCtrl: ToastController,
              private auth: AngularFireAuth) {
  }
  public manu: any[];
  public type: any[];

  public selectedManu: any[];
  public selectedType: any[];

  public sManu: any;
  public sType: any;


  public fullQrData: string;

  manufacturers: any[] = [
    {
      id:0,
      manufacture: 'Bally'
    },
    {
      id:1,
      manufacture: 'IGT'
    },
    { id:2,
      manufacture: 'Aristocrat'
    }
  ];
  types: any[] = [
    {
      manuId:0,
      type:'S6000'
    },
    {
      manuId:0,
      type:'S9000'
    },
    {
      manuId:1,
      type:'S2000'
    },
    {
      manuId:1,
      type:'Gameking'
    },
    {
      manuId:2,
      type:'MKVI'
    },
    {
      manuId:2,
      type:'Viridian'
    },    {
      manuId:2,
      type:'Helix'
    }
  ];

  // Not Working Trying to get only types belonging to manufacturer
  setTypeValue(sManu){
    this.selectedType = this.types.filter(type => type.manuId == this.sManu.id);
  }


  downloadQR() {
    
    //Not Working Combine All Info
    this.fullQrData = this.manufacturers[this.sManu].manufacture + "/"+ this.types[this.sType].type + "/" + this.qrData;
    console.log(this.fullQrData);
    
    
    
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

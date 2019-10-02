import { Component } from '@angular/core';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  qrData = "http://www.sugarpinesoftware.com";
  scannedCode= null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  constructor(private barcodeScanner: BarcodeScanner, private base64ToGallery: Base64ToGallery, private toastCtrl: ToastController) {}

  scanCode(){
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      }
    )
  }
  downloadQR(){
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/png').toString();

    let data = imageData.split(',')[1];

    this.base64ToGallery.base64ToGallery(data,
      { prefix: '_img', mediaScanner: true})
      .then(async res => {
        let toast = await this.toastCtrl.create({
          header: 'QR Code saved'
        });
        toast.present();
      }, err => console.log('err: ',err)
      );
  }
}

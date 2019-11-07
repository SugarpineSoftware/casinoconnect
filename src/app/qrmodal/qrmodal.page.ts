import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qrmodal',
  templateUrl: './qrmodal.page.html',
  styleUrls: ['./qrmodal.page.scss'],
})
export class QRModalPage implements OnInit {

  encryptedQRData = null;
  title = '';

  constructor(public navController: NavController,
              public navParams: NavParams,
              public modalController: ModalController) {
                this.encryptedQRData = navParams.get('encryptedData');
               }

  ngOnInit() {
    /*
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/png').toString();
    const data = imageData.split(',')[1];
    */
  }

  saveToDataBase() {
    this.modalController.dismiss();
  }

  cancel() {
    this.modalController.dismiss();
  }

  edit() {
    this.modalController.dismiss();
  }

}

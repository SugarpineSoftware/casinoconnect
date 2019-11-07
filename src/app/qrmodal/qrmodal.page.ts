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

  }

  saveToDataBase() {
    const returnValue = 0;
    this.modalController.dismiss(returnValue);
  }

  cancel() {
    const returnValue = 1;
    this.modalController.dismiss(returnValue);
  }

  edit() {
    const returnValue = 2;
    this.modalController.dismiss(returnValue);
  }

}

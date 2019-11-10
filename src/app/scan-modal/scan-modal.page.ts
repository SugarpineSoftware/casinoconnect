import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scan-modal',
  templateUrl: './scan-modal.page.html',
  styleUrls: ['./scan-modal.page.scss'],
})
export class ScanModalPage implements OnInit {

  title = '';
  encryptedData = null;

  constructor(
    public navController: NavController,
    public navParams: NavParams,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  forumOnClick() {

  }

  moreInfoOnClick() {

  }

  wikiOnClick() {

  }

  miscOnClick() {

  }

  cancelOnClick() {
    this.modalController.dismiss();
  }
}

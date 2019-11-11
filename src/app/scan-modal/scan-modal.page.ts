import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DataPassService } from 'src/app/data-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-modal',
  templateUrl: './scan-modal.page.html',
  styleUrls: ['./scan-modal.page.scss'],
})
export class ScanModalPage implements OnInit{

  title = '';
  encryptedData = null;

  constructor(
    public navController: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public DataPass: DataPassService,
    public router: Router
  ) {

  }

  ngOnInit() {
  }


  forumOnClick() {
    const returnValue = 0;
    this.modalController.dismiss(returnValue);
  }

  moreInfoOnClick() {
    const returnValue = 1;
    this.DataPass.setDataObject(this.encryptedData[0]);
    this.router.navigateByUrl('view-machine');
    this.modalController.dismiss(returnValue);
  }

  wikiOnClick() {
    const returnValue = 2;
    this.modalController.dismiss(returnValue);
  }

  miscOnClick() {
    const returnValue = 3;
    this.modalController.dismiss(returnValue);
  }

  cancelOnClick() {
    const returnValue = 4;
    this.modalController.dismiss(returnValue);
  }
}

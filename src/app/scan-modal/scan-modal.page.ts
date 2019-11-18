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
export class ScanModalPage implements OnInit {

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

    // setting forum mode to true makes it so that //
    // we can pass in an asset number to search the //
    // forum for //
    this.DataPass.setForumMode(true);
    this.DataPass.setForumAssetNumber(this.encryptedData[0].assetNumber);

    this.router.navigateByUrl("tabs/tab4/Posts");
    this.modalController.dismiss(returnValue);
  }

  maelOnClick(x) {
    this.DataPass.setAsset(x);
    this.modalController.dismiss();
    this.router.navigateByUrl('mael-book');
  }

  moreInfoOnClick() {
    const returnValue = 1;

    // setting up the data to be passed to the view machine view //
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

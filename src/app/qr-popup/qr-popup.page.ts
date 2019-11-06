import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-qr-popup',
  templateUrl: './qr-popup.page.html',
  styleUrls: ['./qr-popup.page.scss'],
})
export class QrPopupPage implements OnInit {

  @Input() title: string;

  constructor(navParams: NavParams) {
    console.log(navParams.get('title'));
  }

  ngOnInit() {
  }


}

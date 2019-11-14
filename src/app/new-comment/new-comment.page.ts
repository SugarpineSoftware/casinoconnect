import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.page.html',
  styleUrls: ['./new-comment.page.scss'],
})
export class NewCommentPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss();
  }

}

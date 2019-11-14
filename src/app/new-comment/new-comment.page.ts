import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.page.html',
  styleUrls: ['./new-comment.page.scss'],
})
export class NewCommentPage implements OnInit {

  private topicId;
  private content;
  private user;

  constructor(public modalController: ModalController,
              public navController: NavController,
              public navParams: NavParams,
              public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.topicId = this.navParams.get('ForumId');
  }

  savePost() {
    this.firebaseService.autoCreatedComment(this.topicId,
                                            this.content,
                                            new Date(),
                                            this.user);
    this.modalController.dismiss();
  }

  cancel() {
    this.modalController.dismiss();
  }

}

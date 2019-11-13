import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.page.html',
  styleUrls: ['./post-modal.page.scss'],
})
export class PostModalPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public firebaseService: FirebaseService,
    public dataPass: DataPassService,
    public navController: NavController,
    public navParams: NavParams

  ) {
    this.topicId = navParams.get('ForumId');
  }

  private asset;
  private content;
  private title;
  private topicId;
  private user;
  public uniqueId :string;
  public uniqueClean: string;
  public payload;

  ngOnInit() {
    this.firebaseService.bringUpListOfForumTopics('Sugarpine Slots').subscribe(res => {
      this.payload = res.map(a => {
        return{
          topic: a.payload.doc.data().Title,
          id: a.payload.doc.data().Id
        }
      })
    })
  
  }


  setTopicId(x) {
    this.topicId = x;
  }
  // dismisses the modal view //
  cancel() {
    this.modalController.dismiss();
  }
  

  savePost() {
    this.firebaseService.saveNewPost(this.asset,
      this.content,
      new Date(),
      this.title,
      this.topicId,
      this.user);
    this.modalController.dismiss();
  }
}

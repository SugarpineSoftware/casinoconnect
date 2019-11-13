import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
import { DataPassService } from '../data-pass.service';
import * as CryptoJS from 'crypto-js';
import { stringify } from 'querystring';

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
  private SECRET_KEY = 'LondonGreen';
  private fullData;
  public payload;
  private date;

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

  encryptData(){
    this.date = new Date;
    this.fullData = this.date.toString() + this.user + this.asset;
    console.log(this.fullData);
    this.uniqueId = CryptoJS.AES.encrypt(this.fullData, this.SECRET_KEY).toString();
    this.uniqueId = this.uniqueId.replace("/","").toString();
  }

  savePost() {
    //this.encryptData();
    console.log(this.asset);
    console.log(this.content);
    console.log(new Date());
    console.log(this.title);
    console.log(this.topicId);
    console.log(this.user);
    // console.log(this.uniqueId);

    this.firebaseService.newSaveNewPost(this.asset,
      this.content,
      new Date(),
      this.title,
      this.topicId,
      this.user);
    /*
    this.firebaseService.saveNewPost(
      this.asset,
      this.content,
      new Date(),
      this.title,
      this.topicId,
      this.user,
      this.uniqueClean
    )
    */
  }
}

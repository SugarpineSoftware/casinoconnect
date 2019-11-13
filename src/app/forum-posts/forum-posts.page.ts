import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { PostModalPage } from 'src/app/post-modal/post-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.page.html',
  styleUrls: ['./forum-posts.page.scss'],
})
export class ForumPostsPage implements OnInit {

  constructor(
    private DataPass: DataPassService,
    private FirebaseService: FirebaseService,
    private Router: Router,
    private location: Location,
    public modalController: ModalController
  ) { }

  public i;
  public j = false;
  public passedInAssetNumber;
  public payload;
  public listOfTopics;

  public title = 'Forum';


  ngOnInit() {
    this.j = this.DataPass.getForumMode();
    this.i = this.DataPass.getForumIndex();
    // passing in true will mean that it DID come from a scan //
    if (this.j === true) {
      this.passedInAssetNumber = this.DataPass.getForumAssetNumber();
      if (this.passedInAssetNumber !== null) {
        this.title = 'Forum Posts';
        this.FirebaseService.getFormPostsBasedOnAssetNumber(this.passedInAssetNumber).subscribe(res => {
          if (res.length === 0) {
            console.log('nothing to display');
          }
          this.payload = res.map(a => {
            return {
              title: a.payload.doc.data().Title,
              content: a.payload.doc.data().Content,
              user: a.payload.doc.data().User,
              date: a.payload.doc.data().Date.toDate(),
              topic: a.payload.doc.data().Topic,
              docId: a.payload.doc.id
            }
          })
        })
      }
    } else {
      console.log('forum mode');
      this.getListOfForumTopics();
      this.FirebaseService.getForumPosts(this.i).subscribe(
        res => { 
          if(res.length === 0){
            console.log('nothing to display');
          }
          this.payload = res.map(a =>{
            return{
              title: a.payload.doc.data().Title,
              content: a.payload.doc.data().Content,
              user: a.payload.doc.data().User,
              date: a.payload.doc.data().Date.toDate(),
              topic: a.payload.doc.data().Topic,
              docId: a.payload.doc.id
            }
          })
        }
      )
    }
  }



  // getting the title of each forum topic //
  // having to do it this way so that we can keep //
  // the list of topic names dynamic //
  getListOfForumTopics() {
    this.FirebaseService.bringUpListOfForumTopics('Sugarpine Slots').subscribe(res => {
      this.listOfTopics = res.map(a => {
        return{
          topic: a.payload.doc.data().Title,
          id: a.payload.doc.data().Id
        }
      })

      // going through the array to see which ones match up with //
      // the this.i //
      this.listOfTopics.forEach(element => {
        if (element.id === this.i) {
          this.title = '' + element.topic;
        }
      });
    })
  }
  
  back(){
    this.location.back();
  }
  goToPost(){
    this.Router.navigateByUrl('forum-post');
  }
  newPost(){
    this.presentPost();
  }

  async presentPost(){
    const modal = await this.modalController.create({
      component: PostModalPage,
      componentProps: {
          ForumId: this.i
      }
    });
    return await modal.present();
  }

}



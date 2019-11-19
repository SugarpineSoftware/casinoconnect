import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { PostModalPage } from 'src/app/post-modal/post-modal.page';
import { ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.page.html',
  styleUrls: ['./forum-posts.page.scss'],
})
export class ForumPostsPage implements OnInit, AfterContentInit {

  constructor(
    private DataPass: DataPassService,
    private FirebaseService: FirebaseService,
    private router: Router,
    private location: Location,
    public modalController: ModalController,
    public navController: NavController
  ) { }

  public i;
  public j = false;
  public passedInAssetNumber:string;
  public payload;
  public listOfTopics;

  public title = 'Forum';


  ngOnInit() {
    this.loadInformation();

  }

  loadInformation() {
    this.j = this.DataPass.getForumMode();
    this.i = this.DataPass.getForumIndex();
    // passing in true will mean that it DID come from a scan //
    if (this.j === true) {
      this.passedInAssetNumber = this.DataPass.getForumAssetNumber();
      if (this.passedInAssetNumber !== null) {
        this.title = 'Forum Posts';
        this.payload = null;
        this.FirebaseService.getForumPostsBasedOnAssetNumber(this.passedInAssetNumber).subscribe(res => {
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
              docId: a.payload.doc.id,
              machine: a.payload.doc.data().Machine,
              bank: a.payload.doc.data().Bank,
              area: a.payload.doc.data().Area,
              asset: a.payload.doc.data().Asset
            };
          });
        });
      }
    } else {
      this.payload = null;
      this.getListOfForumTopics();
      this.FirebaseService.getForumPosts(this.i).subscribe(
        res => {
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
              docId: a.payload.doc.id,
              machine: a.payload.doc.data().Machine,
              bank: a.payload.doc.data().Bank,
              area: a.payload.doc.data().Area,
              asset: a.payload.doc.data().Asset
              
            };
          });

          this.payload.forEach(element => {
          });
        }
      );
    }
  }


  ngAfterContentInit() {
    this.loadInformation();
  }


  // getting the title of each forum topic //
  // having to do it this way so that we can keep //
  // the list of topic names dynamic //
  getListOfForumTopics() {
    this.FirebaseService.bringUpListOfForumTopics().subscribe(res => {
      this.listOfTopics = res.map(a => {
        return{
          topic: a.payload.doc.data().Title,
          id: a.payload.doc.data().Id
        };
      });

      // going through the array to see which ones match up with //
      // the this.i //
      this.listOfTopics.forEach(element => {
        if (element.id === this.i) {
          this.title = '' + element.topic;
        }
      });
    });
  }

  back() {
    this.location.back();
  }
  goToPost(order) {

    this.DataPass.setMainObjectToCommentSection(order);

    // this.DataPass.setDocumentIdForum(order.docId);
    // this.DataPass.setDocumentTitleForum(order.title);
    // this.DataPass.setObjectPost(order.content);
    this.router.navigateByUrl('forum-post');
  }
  
  newPost() {
    this.presentPost();
  }

  async presentPost() {
    const modal = await this.modalController.create({
      component: PostModalPage,
      componentProps: {
          ForumId: this.i
      }
    });
    return await modal.present();
  }

}



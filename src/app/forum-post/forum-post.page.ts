import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewCommentPage } from 'src/app/new-comment/new-comment.page';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.page.html',
  styleUrls: ['./forum-post.page.scss'],
})
export class ForumPostPage implements OnInit {

  constructor(
    private DataPass: DataPassService,
    private FirebaseService: FirebaseService,
    private Router: Router,
    private location:Location,
    private modalController: ModalController,
    private navController: NavController
  ) {
  }
    private id: string;
    public title: string;
    public post;
    public bank;
    public machine;
    public area;
    public asset;
    

    public mainObject;

    public payload;

  ngOnInit() {

    this.mainObject = this.DataPass.getMainObjectToCommentSection();
    if (this.mainObject != null) {

      console.log(this.mainObject);
      this.id = this.mainObject.id;
      this.title = this.mainObject.info.Title;
      this.post = this.mainObject.info.Content;
      this.bank = this.mainObject.info.Bank;
      this.area = this.mainObject.info.Area;
      this.asset = this.mainObject.info.Asset;
      this.machine = this.mainObject.info.Machine;
    }

    this.FirebaseService.getForumCommentsByDocumentId(this.id).subscribe(res => {
      this.payload = res.map(a => {

        return a.payload.doc.data();
      });
    });
  }

  newPost() {
    this.presentPost();
  }

  async presentPost() {
    const modal = await this.modalController.create({
      component: NewCommentPage,
      componentProps: {
          ForumId: this.id
      }
    });
    return await modal.present();
  }


  goBack() {
    this.location.back();
  }
}

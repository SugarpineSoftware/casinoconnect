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
    private post;
    public payload;

  ngOnInit() {
    this.id = this.DataPass.getDocumentIdForum();
    this.title = this.DataPass.getDocumentTitleForum();

    this.FirebaseService.getForumCommentsByDocumentId(this.id).subscribe(res => {
      this.payload = res.map(a => {
        return{
          comment: a.payload.doc.data().Comment,
          user: a.payload.doc.data().User
        };
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
          ForumId: ''
      }
    });
    return await modal.present();
  }


  goBack() {
    this.location.back();
  }
}

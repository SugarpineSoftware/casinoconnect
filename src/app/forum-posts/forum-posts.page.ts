import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
    private location:Location 
  ) { }

  public i;
  public j = false;
  public passedInAssetNumber;
  public payload;

  ngOnInit() {
    this.j = this.DataPass.getForumMode();
    console.log(this.j);
    this.i = this.DataPass.getForumIndex();

    // passing in true will mean that it DID come from a scan //
    if (this.j === true) {
      this.passedInAssetNumber = this.DataPass.getForumAssetNumber();
      if (this.passedInAssetNumber !== null) {
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
              docId: a.payload.doc.id
            }
          })
          this.payload.forEach(element => {
            console.log(element);
          });
        })
      }
    } else {
      console.log('forum mode');
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
              docId: a.payload.doc.id
            }
          })

          this.payload.forEach(element => {
            console.log(element.docId);
          });
        }
      )
    }
  }
  back(){
    this.location.back();
  }
  goToPost(){
    this.Router.navigateByUrl('forum-post');
  }
}



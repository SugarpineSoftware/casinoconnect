import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.page.html',
  styleUrls: ['./forum-posts.page.scss'],
})
export class ForumPostsPage implements OnInit {

  constructor(
    private DataPass: DataPassService,
    private FirebaseService: FirebaseService,
    private Router: Router
  ) { }

  public i;
  public payload;

  ngOnInit() {
    this.i = this.DataPass.getForumIndex();
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
            date: a.payload.doc.data().Date.toDate()
          }
        })
      }
    )
  }
  back(){
    this.Router.navigateByUrl('tabs/tab4')
  }
  goToPost(){
    this.Router.navigateByUrl('forum-post');
  }
}

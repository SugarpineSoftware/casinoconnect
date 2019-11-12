import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.page.html',
  styleUrls: ['./forum-post.page.scss'],
})
export class ForumPostPage implements OnInit {

  constructor(
    private DataPass: DataPassService,
    private FirebaseService: FirebaseService,
    private Router: Router
  ) { }

  ngOnInit() {
  }

}

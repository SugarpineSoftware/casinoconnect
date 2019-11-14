import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service'
import { DataPassService } from '../data-pass.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  public payload;
 

  constructor(
    private firebase:FirebaseService,
    private DataPass: DataPassService,
    private Router: Router
    ) {}
  
  ngOnInit(){

  }

  viewPosts(i) {
    this.DataPass.setForumIndex(i);
    this.Router.navigateByUrl("tabs/tab4/Posts");
  }

<<<<<<< HEAD
  ionViewWillEnter() {
=======
  ionViewWillEnter(){
    this.DataPass.setForumMode(false);
>>>>>>> 092157fd5be058a8410096d5fbb8b986ed0b6d66
    this.firebase.bringUpListOfForumTopics('Sugarpine Slots').subscribe(res =>{
      this.payload = res.map(a => {
        return{
          topic: a.payload.doc.data().Title,
          id: a.payload.doc.data().Id
        };
      });
    });
  }
}

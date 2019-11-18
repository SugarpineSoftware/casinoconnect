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

  private bank;
  private machine;
  private asset;
  private content;
  private title;
  private topicId;
  private forumMode = false;

  // the user information will need to be brought up dynamically //
  private user = 'Cory';
  private area;
  public payload;

  public sValue: string;
  public sSearch: any;
  public sPlaceholder: string;
  public sField: string;

  constructor(
    public modalController: ModalController,
    public firebaseService: FirebaseService,
    public dataPass: DataPassService,
    public navController: NavController,
    public navParams: NavParams

  ) {
    this.topicId = navParams.get('ForumId');
    this.forumMode = navParams.get('ForumMode');
  }

  

  searchOptions: any[] = [
    {id: 0, field: 'Down Machines', placeholder: 'Down Machines'},
    {id: 1, field: 'Purchase Requests', placeholder: 'Purchase Requests'},
    {id: 2, field: 'Pass Down', placeholder: 'Pass Down'},
    {id: 3, field: 'Memos', placeholder: 'Memos'},
    {id: 4, field: 'Questions & Suggestions', placeholder: 'Questions & Suggestions'}
  ];

  ngOnInit() {
    this.firebaseService.bringUpListOfForumTopics().subscribe(res => {
      this.payload = res.map(a => {
        return{
          topic: a.payload.doc.data().Title,
          id: a.payload.doc.data().Id
        };
      });
    });
  }


  // dismisses the modal view //
  cancel() {
    this.modalController.dismiss();
  }

  

    // When the topic drop down changes... //
    // this stuff gets changed //
    setSearchValue(sSearch) {
      this.sPlaceholder = this.searchOptions[sSearch.id].placeholder;
      this.sField = this.searchOptions[sSearch.id].field;
      this.topicId = sSearch.id;
    }

  savePost() {

    // the topic id is going to need to be set for //
    // when we are coming from a scan //
    this.firebaseService.saveNewPost(this.asset,
      this.content,
      new Date(),
      this.title,
      this.topicId,
      this.user,
      this.bank,
      this.machine,
      this.area);
    this.modalController.dismiss();
  }
}


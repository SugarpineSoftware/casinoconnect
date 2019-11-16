import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { Router } from '@angular/router';
import { DataPassService } from '../data-pass.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

    public payload;

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private dataPass: DataPassService
    ) {
    }

    ngOnInit() {
    }

    // called when the view loads //
    ionViewWillEnter() {
      // brings up a list of wiki topics for the buttons //
      this.firebase.bringUpListOfWikiTopics('Sugarpine Slots').subscribe(res => {
        this.payload = res.map(a => {
          return {
            name: a.payload.doc.data().Title,
            id: a.payload.doc.data().Id
          };
        });
    });
  }

  viewDocs(i){
    this.dataPass.setWikiIndex(i);
    this.router.navigateByUrl('tabs/tab3/Wiki');
    
  }
}

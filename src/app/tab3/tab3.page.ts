import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

    public payload;

  constructor(private firebase: FirebaseService) {
    }

    ngOnInit() {
      console.log('in here...');
    }

    // called when the view loads //
    ionViewWillEnter() {
      console.log('in here........ Yup');
        // brings up a list of wiki topics for the buttons //
      this.firebase.bringUpListOfWikiTopics('Sugarpine Slots').subscribe(res => {
        this.payload = res.map(a => {
          return {
            name: a.payload.doc.data().name
          };
        });
    });
  }
}

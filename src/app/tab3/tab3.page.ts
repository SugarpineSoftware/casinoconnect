import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

    payload;

  constructor(private firebase: FirebaseService) {
    }

<<<<<<< HEAD
    ngOnInit() {
        console.log('in here...');
    }
=======
>>>>>>> 1a386bc494ef71b0688ee57fe335074f6bde54be

    ionViewWillEnter() {
        this.firebase.bringUpListOfWikiTopics('Sugarpine Slots').subscribe(res => {
            this.payload = res.map(a => {
              console.log('Hey there -> ' + a);
            });
        });
    }






    /*
  db.collection("cities").where("capital", "==", true)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  */


}

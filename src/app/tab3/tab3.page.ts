import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private firebase: FirebaseService
  ) {
<<<<<<< HEAD
    var unreadInt:number = 5;
  }


=======

  }


  /*
 ngOnInit(){
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
 }
 */
>>>>>>> 063520b2aec6bd8da82f55199910d8d32e330bb2

}

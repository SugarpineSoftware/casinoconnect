import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  createTask() {
    return new Promise<any>((resolve, reject) => {

      const database = this.firestore;
      database.collection('person').add({
        first: 'Cory'
      }).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }


  newScan(newScanString) {

  }
}
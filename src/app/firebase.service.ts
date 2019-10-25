import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }



  pullWiki(){
    return this.firestore.collection('Company').doc('Sugarpine Slots').collection("Wiki");
  }

  // brings up the information about the scanned QR code //
  newScan(newScanString) {

    // I need to tear appart the incoming string to get the manufacture, machine model, and serial Number //
    // this will output something like Bally/S6000/Serial Number //
    const scanStringArray = newScanString.split('/');
    const manufacture = scanStringArray[0];
    const model = scanStringArray[1];
    const serial = scanStringArray[2];

    // /Company/Sugarpine Slots/Manufacturer/Bally/Cabinet/S6000/Info/123456789
    return this.firestore.collection('Company')
      .doc('Sugarpine Slots')
      .collection('Manufacturer')
      .doc(manufacture)
      .collection('Cabinet')
      .doc(model)
      .collection('Info', ref => ref.where('serial', '==', serial)).snapshotChanges();
  }
}


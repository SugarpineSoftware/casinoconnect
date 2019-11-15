import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  // pulls the topics from the wiki //
  pullWiki() {
    return this.firestore.collection('Company').doc('Sugarpine Slots').collection('Wiki');
  }

  pullMael(x: string){
    console.log(x);
    return this.firestore.collection('Company')
    .doc('Sugarpine Slots').collection('MaelBook', ref => ref.where('asset', '==', x))
    .snapshotChanges();
  }




  // brings up the information about the scanned QR code //
  newScan(newScanString) {
    return this.firestore.collection('Company')
    .doc('Sugarpine Slots')
    .collection('Machine', ref => ref.where('Serial', '==', newScanString)).snapshotChanges();
  }




  // new search - the field is the drop down menu item for which to search by //
  // and the value is the actual value to search //
  newSearch(value, field) {
    return this.firestore.collection(
      'Company').doc('Sugarpine Slots').collection('Machine', ref => ref.where(field, '==', value)).snapshotChanges();
    }


  // brings up a list of wiki topics //
  bringUpListOfWikiTopics(companyName) {
    return this.firestore.collection('Company')
    .doc(companyName)
    .collection('Settings').doc('AJDiooJiRB3e7Qa4MPtQ').collection('Wiki_Topics').snapshotChanges();
  }

  getWikiDocs(topicId){
    return this.firestore.collection('Company').doc('Sugarpine Slots').collection('Wiki', ref => ref.where('Topic_Id', '==',topicId)).snapshotChanges();
  }

  // brings up a list of forum topics //
  bringUpListOfForumTopics(companyName) {
    return this.firestore.collection('Company')
    .doc(companyName)
    .collection('Settings').doc('4dPG1ij10lXO2dalG7Lt').collection('Forum_Topics').snapshotChanges();
  }


  // gets a forum post by topic id //
  getForumPosts(topicId) {
    return this.firestore.collection(
      'Company').doc('Sugarpine Slots').collection('Forum', ref => ref.where('Topic_Id', '==', topicId)).snapshotChanges();
  }


  // gets the forum comments by document ID //
  getForumCommentsByDocumentId(docId){
    return this.firestore.collection(
      'Company').doc('Sugarpine Slots').collection('Forum').doc(docId).collection('Comments').snapshotChanges();
  }


  // gets forum post based on asset number 
  getFormPostsBasedOnAssetNumber(assetNumber) {
    return this.firestore.collection(
      'Company').doc('Sugarpine Slots').collection('Forum', ref => ref.where('Asset', '==', assetNumber)).snapshotChanges();
  }

  // saves a new post (main topic post) //
  saveNewPost(asset, content, date, title, topicId, user, bank, machine, area) {
    const uID = this.firestore.createId();
    return  this.firestore.collection('Company')
    .doc('Sugarpine Slots').collection('Forum')
    .doc(uID).set({
      Asset: asset,
      Content: content,
      Date: date,
      Title: title,
      Topic_Id: topicId,
      User: user,
      Bank: bank,
      Machine: machine,
      Area: area
    });
  }

  // get Profile Information
  getProfileInfo(x: string) {
    console.log(x);
    return this.firestore.collection('Company').doc('Sugarpine Slots')
    .collection('Profiles', ref => ref.where('email', '==', x)).snapshotChanges();
  }


  // once the user has been created via auth //
  // we also create a seperate entry for the //
  // user under profile in the database //
  saveUserProfileToDatabase(email, password, firstName, lastName, userName) {
    const uID = this.firestore.createId();
    return this.firestore.collection('Company')
    .doc('Sugarpine Slots').collection('Profiles')
    .doc(uID).set({
      User_F_Name: firstName,
      User_L_Name: lastName,
      User_Name: userName,
      Email: email,
      Picture: ''
    });
  }

  // creates a comment to the current post //
  autoCreatedComment(DocId, content, date, user) {
    const uID = this.firestore.createId();
    return this.firestore.collection('Company')
    .doc('Sugarpine Slots').collection('Forum')
    .doc(DocId).collection('Comments').doc(uID).set({
      User: user,
      Comment: content,
      Date: date
    });

  }

  // saves a new QR code to the database // 
  // takes in a ton of parameters //
  saveQRToDataBase(companyName, encryptedQrCode, manufacture, cabinet, area, bank, machineNumber, asset, serialNumber,
    billValidator, billValidatorFirmware, inService, keyChip1, keyChip2, machineDenom, maxBet, onFloor, payTableId,
    printer, printerFirmware, theme) {

      companyName = this.checkForNullOrUndefined(companyName);
      manufacture = this.checkForNullOrUndefined(manufacture);
      serialNumber = this.checkForNullOrUndefined(serialNumber);
      area = this.checkForNullOrUndefined(area);
      bank = this.checkForNullOrUndefined(bank);
      asset = this.checkForNullOrUndefined(asset);
      cabinet = this.checkForNullOrUndefined(cabinet);
      machineNumber = this.checkForNullOrUndefined(machineNumber);
      machineDenom = this.checkForNullOrUndefined(machineDenom);
      billValidator = this.checkForNullOrUndefined(billValidator);
      billValidatorFirmware = this.checkForNullOrUndefined(billValidatorFirmware);
      keyChip1 = this.checkForNullOrUndefined(keyChip1);
      keyChip2 = this.checkForNullOrUndefined(keyChip2);
      maxBet = this.checkForNullOrUndefined(maxBet);
      payTableId = this.checkForNullOrUndefined(payTableId);
      printer = this.checkForNullOrUndefined(printer);
      printerFirmware = this.checkForNullOrUndefined(printerFirmware);
      theme = this.checkForNullOrUndefined(theme);
      encryptedQrCode = this.checkForNullOrUndefined(encryptedQrCode);
      onFloor = this.checkForToggleUndefined(onFloor);
      inService = this.checkForToggleUndefined(inService);

      return this.firestore.collection('Company')
       .doc(companyName)
       .collection('Machine')
       .doc(serialNumber)
       .set({Manufacturer: manufacture,
        Serial: serialNumber,
        Area: area,
        EncryptedCode: encryptedQrCode,
        Cabinet: cabinet,
        Bank: bank,
        Machine_Number: machineNumber,
        Asset: asset,
        Bill_Validator: billValidator,
        Bill_Validator_Firmware: billValidatorFirmware,
        In_Service: inService,
        KeyChip1: keyChip1,
        KeyChip_2: keyChip2,
        Machine_Denom: machineDenom,
        Max_Bet: maxBet,
        On_Floor: onFloor,
        PayTable_Id: payTableId,
        Printer: printer,
        Printer_Firmware: printerFirmware,
        Theme: theme
      }, {merge: true})
      .then(() => {
        return true;
      });
    }


    // **** support methods for creating a qr code **** //
    // checking the values for null or undefined //
    checkForNullOrUndefined(value) {
      if (value === null || value === undefined) {
        return '';
      } else {
        return value;
      }
    }

    // checking for undefined toggle values //
    checkForToggleUndefined(value) {
      if (value === undefined) {
        return false;
      } else {
        return value;
      }
    }

  }



import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  pullWiki() {
    return this.firestore.collection('Company').doc('Sugarpine Slots').collection('Wiki');
  }





  // brings up the information about the scanned QR code //
  newScan(newScanString) {
    return this.firestore.collection('Company')
    .doc('Sugarpine Slots')
    .collection('Machine', ref => ref.where('Serial', '==', newScanString)).snapshotChanges();
  }






  newSearch(value, field) {
    return this.firestore.collection(
      'Company').doc('Sugarpine Slots').collection('Machine', ref => ref.where(field, '==', value)).snapshotChanges();
    }



  bringUpListOfWikiTopics(companyName) {
    return this.firestore.collection('Company')
    .doc(companyName)
    .collection('Wiki').snapshotChanges();
  }

  bringUpListOfForumTopics(companyName) {
    return this.firestore.collection('Company')
    .doc(companyName)
    .collection('Forum').snapshotChanges();
  }

  getForumPosts(topicId) {
    const docTitle = ['DownMachines', 'Memos', 'PassDown', 'PurchaseRequests', 'QuestionsSuggestions'];

    return this.firestore.collection(
      'Company').doc('Sugarpine Slots').collection('Forum', ref => ref.where('Topic', '==', docTitle[topicId])).snapshotChanges();
  }




  
  getFormPostsBasedOnAssetNumber(assetNumber) {
    return this.firestore.collection(
      'Company').doc('Sugarpine Slots').collection('Forum', ref => ref.where('Asset', '==', assetNumber)).snapshotChanges();
  }


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



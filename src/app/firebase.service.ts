import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { resolve } from 'path';
import { reject } from '../../node_modules/@types/q';

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




  bringUpListOfWikiTopics(companyName) {
    return this.firestore.collection('Company')
    .doc(companyName)
    .collection('Wiki').snapshotChanges();
  }


  
  saveQRToDataBase(companyName, encryptedQrCode, manufacture, cabinet, area, bank, machineNumber, asset, serialNumber,
    billValidator, billValidatorFirmware, inService, keyChip1, keyChip2, machineDenom, maxBet, onFloor, payTableId,
    printer, printerFirmware, theme) {

        const machineInfo = new MachineInfo();
        machineInfo.cabinet = cabinet;
        machineInfo.asset = asset;
        machineInfo.area = area;
        machineInfo.bank = bank;
        machineInfo.machineDenom = machineDenom;
        machineInfo.billValidator = billValidator;
        machineInfo.billValidatorFirmware = billValidatorFirmware;
        machineInfo.encryptedQR = encryptedQrCode;
        machineInfo.inService = inService;
        machineInfo.keychip1 = keyChip1;
        machineInfo.keychip2 = keyChip2;
        machineInfo.machineDenom = machineDenom;
        machineInfo.machineNumber = machineNumber;
        machineInfo.manufacture = manufacture;
        machineInfo.maxbet = maxBet;
        machineInfo.onFloor = onFloor;
        machineInfo.paytableId = payTableId;
        machineInfo.printer = printer;
        machineInfo.printerFirmware = printerFirmware;
        machineInfo.theme = theme;
        machineInfo.serialNumber = serialNumber;

        this.firestore.collection('Company').doc(companyName)
        .collection('Manufacture')
        .doc(manufacture)
        .collection('Cabinet')
        .doc(cabinet)
        .collection('Info')
        .doc(serialNumber)
        .update(machineInfo).then(res => {
          console.log('success!');
        });
    }
    
  }






class MachineInfo {
  cabinet: string;
  asset: string;
  encryptedQR: string;
  manufacture: string;
  area: string;
  bank: string;
  machineNumber: string;
  serialNumber: string;
  billValidator: string;
  billValidatorFirmware: string;
  inService: boolean;
  keychip1: string;
  keychip2: string;
  machineDenom: string;
  maxbet: string;
  onFloor: string;
  paytableId: string;
  printer: string;
  printerFirmware: string;
  theme: string;
}


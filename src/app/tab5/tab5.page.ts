import { Component } from '@angular/core';
import { FirebaseService} from 'src/app/firebase.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor( 
    private FirebaseService : FirebaseService,
    private AlertController: AlertController,
    
    ) {}

  public payload;

  public sValue: string;
  public sSearch: any;
  public sPlaceholder: string;
  public sField: string;

  

  searchOptions: any[]=[
    {id:0, field:"Area", placeholder:"Area Number"},
    {id:1, field:"Asset", placeholder:"Asset Number"},
    {id:2, field:"Bank", placeholder:"Bank Number"},
    {id:3, field:"Cabinet", placeholder:"Cabinet Style"},
    {id:4, field:"Manufacturer",placeholder:"Manufacturer"},
    {id:5, field:"Serial",placeholder:"Serial Number"},
    {id:6, field:"Theme",placeholder:"Theme"},
    {id:7, field:"In_Service",placeholder:"In Service True or False"},
    {id:8, field:"On_Floor",placeholder:"On Floor True or False"}
  ]

    // Uses The Value Of The Manufacturer Dropdown To Create The Type Array
    setSearchValue(sSearch) {
      this.sPlaceholder = this.searchOptions[sSearch.id].placeholder;
      this.sField = this.searchOptions[sSearch.id].field;
    }
    async presentAlert(fHeader: string, subHeaderString: string, messageString: string) {
      const alert = await this.AlertController.create({
        header: fHeader,
        subHeader: subHeaderString,
        message: messageString,
        buttons: ['OK']
      });
      await alert.present();
    }
    

    searchData(){
      console.log(this.sValue);
      console.log(this.sField);
      this.FirebaseService.newSearch(this.sValue,this.sField).subscribe
      (res =>{
        if(res.length === 0){
          this.presentAlert('No Data Found',"Search Failed","Please Try Again")
        }
        this.payload = res.map(a =>{
          return{
            area: a.payload.doc.data().Area,
            asset: a.payload.doc.data().Asset,
            bank: a.payload.doc.data().Bank,
            machine: a.payload.doc.data().Machine,
            cabinet: a.payload.doc.data().Cabinet,
            inService: a.payload.doc.data().In_Service,
            manufacturer: a.payload.doc.data().Manufacturer,
            serial: a.payload.doc.data().Serial,
            theme: a.payload.doc.data().Theme,
            onFloor: a.payload.doc.data().On_Floor,
            encrypted: a.payload.doc.data().Encrypted
          }
        })
      });
      console.log(this.payload);
    }

    viewMachine(params){
      
    };
}

import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-mael-book',
  templateUrl: './mael-book.page.html',
  styleUrls: ['./mael-book.page.scss'],
})
export class MaelBookPage implements OnInit {

  constructor(
    private DataPass: DataPassService,
    private FireBase: FirebaseService,
    private Router:Router,
    private modalController: ModalController
  ) { }

  private asset: string;
  private payload;


  ngOnInit() {
    this.asset = this.DataPass.getAsset().toString();
  }


  cancel() {
    console.log('cancelled');
    this.modalController.dismiss();
  }

  ngAfterViewInit(){
    this.FireBase.pullMael(this.asset).subscribe(
      res =>{
        if(res.length === 0){
          console.log('you are fucked');
        }
        this.payload = res.map(a =>{
          return{
            user: a.payload.doc.data().user,
            content: a.payload.doc.data().content
          }
        })
      }
    )
  }

}

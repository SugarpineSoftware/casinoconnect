import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-meal-entry',
  templateUrl: './new-meal-entry.page.html',
  styleUrls: ['./new-meal-entry.page.scss'],
})
export class NewMealEntryPage implements OnInit {

  constructor(
    private dataPass:DataPassService,
    private fireBase:FirebaseService,
    private router:Router
  ) { }
    private user;
    private content;
    private date;
    private asset;
  ngOnInit() {
  }

  saveNewPost(){
    this.date = new Date();
    this.asset = this.dataPass.getAsset();
    this.fireBase.saveNewMael(this.asset,this.user,this.date,this.content);
    this.router.navigateByUrl('mael-book')
  }

}

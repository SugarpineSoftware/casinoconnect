import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mael-book',
  templateUrl: './mael-book.page.html',
  styleUrls: ['./mael-book.page.scss'],
})
export class MaelBookPage implements OnInit {

  constructor(
    private DataPass: DataPassService,
    private FireBase: FirebaseService,
    private Router:Router
  ) { }

  private asset:string;
  private payload;


  ngOnInit() {
    this.asset = this.DataPass.getAsset().toString();
  
  }
  ngAfterViewInit(){
    this.FireBase.pullMael(this.asset).subscribe(
      res =>{
        if(res.length === 0){
          console.log('you are fucked');
        }
        this.payload = res.map(a =>{
          return{
            user: a.payload.doc.data().User,
            content: a.payload.doc.data().Content,
            date: a.payload.doc.data().Date.toDate()
          }
        })
      }
    )
  }

}

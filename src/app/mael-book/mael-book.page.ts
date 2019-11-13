import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-mael-book',
  templateUrl: './mael-book.page.html',
  styleUrls: ['./mael-book.page.scss'],
})
export class MaelBookPage implements OnInit {

  constructor(
    private DataPass: DataPassService,
    private FireBase: FirebaseService
  ) { }

  private asset;
  private payload;

  ngOnInit() {
    this.asset = this.DataPass.getAsset();
    this.FireBase.pullMael(this.asset).subscribe(
      res =>{
        this.payload = res.map(a =>{
          return{
            user: a.payload.doc.data().User,
            content: a.payload.doc.data().Content,
            date: a.payload.doc.data().Date.toDate()
          }
        })
      }
    )
    console.log(this.payload);
  }

}

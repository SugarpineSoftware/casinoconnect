import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../data-pass.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
})
export class WikiPage implements OnInit {

  constructor(
    private dataPass:DataPassService,
    private fireBase:FirebaseService,
    private router:Router 
  ) { }

  public i;
  public payload;

  ngOnInit() {
    this.loadInformation();
  }

  loadInformation(){
    this.i = this.dataPass.getWikiIndex();

    this.fireBase.getWikiDocs(this.i).subscribe( res => {
      if(res.length === 0) {
        console.log( 'No Wiki Entries Under This Topic');
      }
      this.payload = res.map(a => {
        return {
          cabinet: a.payload.doc.data().Cabinet,
          manufacturer: a.payload.doc.data().Manufacturer,
          title: a.payload.doc.data().Title,
          url: a.payload.doc.data().URL
        }
      })
    })
  }

  pushDoc(i){
    this.dataPass.setWikiDoc(i);
    this.router.navigateByUrl('tabs/tab3/Doc');
  }

}

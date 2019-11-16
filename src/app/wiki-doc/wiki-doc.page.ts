import { Component, OnInit } from '@angular/core';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Router } from '@angular/router';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-wiki-doc',
  templateUrl: './wiki-doc.page.html',
  styleUrls: ['./wiki-doc.page.scss'],
})
export class WikiDocPage implements OnInit {

  constructor(
    private document:DocumentViewer,
    private router:Router,
    private dataPass: DataPassService
  
  ) { }
    private x;
    public options;
  ngOnInit() {
    this.x = this.dataPass.getWikiDoc();
    this.document.viewDocument(this.x,'application/pdf',this.options);
  }

}

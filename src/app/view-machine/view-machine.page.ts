import { Component, OnInit, AfterContentInit} from '@angular/core';
import { Data } from '@angular/router';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-view-machine',
  templateUrl: './view-machine.page.html',
  styleUrls: ['./view-machine.page.scss'],
})
export class ViewMachinePage implements OnInit, AfterContentInit {

  constructor(
    private DataPass: DataPassService
  ) { }

    public m;

  ngOnInit() {
    this.m = this.DataPass.getDataObject();
    // console.log('in here yo ' + this.m[0].serial);
    /*
    this.m.forEach(element => {
      console.log(element);
    });
    */
  }


}

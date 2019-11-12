import { Component, OnInit} from '@angular/core';
import { Data } from '@angular/router';
import { DataPassService } from '../data-pass.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-machine',
  templateUrl: './view-machine.page.html',
  styleUrls: ['./view-machine.page.scss'],
})
export class ViewMachinePage implements OnInit {

  constructor(
    private DataPass: DataPassService,
    private location: Location

  ) { }

    public m;

  ngOnInit() {
    this.m = this.DataPass.getDataObject();
  }


  goBack(){
    this.location.back();
  }
}

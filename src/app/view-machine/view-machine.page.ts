import { Component, OnInit} from '@angular/core';
import { Data } from '@angular/router';
import { DataPassService } from '../data-pass.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-machine',
  templateUrl: './view-machine.page.html',
  styleUrls: ['./view-machine.page.scss'],
})
<<<<<<< HEAD
export class ViewMachinePage implements OnInit{
=======
export class ViewMachinePage implements OnInit {
>>>>>>> 67e4f3b73961e1a8d2cd08df9e23d608b9f45d35

  constructor(
    private DataPass: DataPassService,
    private location: Location

  ) { }

    public m;

  ngOnInit() {
    this.m = this.DataPass.getDataObject();
  }
<<<<<<< HEAD
=======


  goBack(){
    this.location.back();
  }
>>>>>>> 67e4f3b73961e1a8d2cd08df9e23d608b9f45d35
}

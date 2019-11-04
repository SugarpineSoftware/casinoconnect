import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor() {}

  searchOptions: any[]=[
    {field:"Area", placeholder:"Area Number"},
    {field:"Asset", placeholder:"Asset Number"},
    {field:"Bank", placeholder:"Bank Number"},
    {field:"Cabinet", placeholder:"Cabinet Style"},
    {field:"Manufacturer",placeholder:"Manufacturer"},
    {field:"Serial",placeholder:"Serial Number"},
    {field:"Theme",placeholder:"Theme"},
    {field:"InService",placeholder:"In Service True or False"},
    {field:"OnFloor",placeholder:"On Floor True or False"}
  ]

}

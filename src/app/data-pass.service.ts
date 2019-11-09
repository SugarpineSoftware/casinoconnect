import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  private data = [];

  constructor() { }


  private m;

  setDataObject(x){
    this.m = x;
  }
  getDataObject(){
    return this.m;
  }

}

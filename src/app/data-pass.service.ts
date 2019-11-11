import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {


  constructor() { }


  private m;
  private i;

  setDataObject(x) {
    this.m = x;
  }

  getDataObject() {
    return this.m;
  }

  setForumIndex(x) {
    this.i = x;
  }
  getForumIndex() {
    return this.i;
  }


}

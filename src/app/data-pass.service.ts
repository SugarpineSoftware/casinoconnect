import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {


  constructor() { }


  private m;
  private i;
  private l;

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

  // setting the forum mode //
  setForumMode(x) {
    this.l = x;
  }

  getForumMode() {
    return this.l;
  }


}

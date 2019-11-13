import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {


  constructor() { }

  private a;
  private f;
  private m;
  private i;
  private l;
  private k;
  private j;

  //Passing Object To View Machine
  setDataObject(x) {
    this.m = x;
  }
  getDataObject() {
    return this.m;
  }

  //Get correct topic for forum posts
  setForumIndex(x) {
    this.i = x;
  }
  getForumIndex() {
    return this.i;
  }

  // setting the forum mode
  setForumMode(x) {
    this.l = x;
  }
  getForumMode() {
    return this.l;
  }

  // Get Correct Posts By Asset From New Scan
  setForumAssetNumber(x) {
    this.k = x;
  }
  getForumAssetNumber() {
    return this.k;
  }

  // Collect Document Id to view Comments //
  setDocumentIdForum(x){
    this.f = x;
  }
  getDocumentIdForum(){
    return this.f;
  }
  // setting the title of the comments //
  setDocumentTitleForum(x) {
    this.j = x;
  }

  getDocumentTitleForum() {
    return this.j;
  }

  // Collect Object Post
  setObjectPost(x){
    this.a = x;
  }
  getObjectPost(){
    return this.a;
  }

}

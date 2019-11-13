import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {


  constructor() { }

  private a;
  private b;
  private f;
  private m;
  private i;
  private l;
  private k;

  //Passing Object To View Machine
  setDataObject(x) {
    this.m = x;
  }
  getDataObject() {
    return this.m;
  }
  //Passing Asset 
  setAsset(x){
    this.b = x;
  }
  getAsset(){
    return this.b;
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

  //Get Correct Posts By Asset From New Scann
  setForumAssetNumber(x) {
    this.k = x;
  }
  getForumAssetNumber() {
    return this.k;
  }

  //Collect Document Id to view Comments
  setDocumentIdForum(x){
    this.f = x;
  }
  getDocumentIdForum(){
    return this.f;
  }

  //Collect Object Post
  setObjectPost(x){
    this.a = x;
  }
  getObjectPost(){
    return this.a;
  }

}

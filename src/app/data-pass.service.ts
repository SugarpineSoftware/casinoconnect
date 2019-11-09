import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  private data = [];

  constructor() { }

  private sAsset: string;

  setData(x){
    this.sAsset = x;
  }

  getData(){
    return this.sAsset;
  }

}

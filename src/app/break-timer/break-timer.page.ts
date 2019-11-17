import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-break-timer',
  templateUrl: './break-timer.page.html',
  styleUrls: ['./break-timer.page.scss'],
})
export class BreakTimerPage implements OnInit {

  constructor() { }

  private remainingTime;
  private startTime;
  private endTime;
  private timeLimit: number = 5;
  private currentTime;


  ngOnInit() {
  }

  startTimer(){
    this.startTime = new Date().getSeconds;
    this.endTime = this.startTime + this.timeLimit;
    this.remainingTime = this.currentTime - this.endTime;

  }

}

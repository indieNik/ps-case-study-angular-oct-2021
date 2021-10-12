import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss']
})
export class RouteThreeComponent implements OnInit {

  timerConfig = {
    initialTimerValue: 0,
    timer: 0,
    timerRunning: false,
    timerlogs: [''],
    startClicks: 0,
    pauseClicks: 0,
  }
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.resetTimer()
  }

  startTimer() {
    this.timerConfig.startClicks++;
    this.timerConfig.timerRunning = true;
    this.interval = setInterval(() => this.timerConfig.timer--, 1000);
    this.timerConfig.timerlogs.push(`Started at ${this.getTimeStr()}`);
  }

  pauseTimer() {
    this.timerConfig.pauseClicks++;
    this.timerConfig.timerRunning = false;
    clearInterval(this.interval);
    this.timerConfig.timerlogs.push(`Paused at ${this.getTimeStr()}`);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timerConfig.timer = this.timerConfig.initialTimerValue;
    this.timerConfig.timerlogs = [];
    this.timerConfig.startClicks = 0;
    this.timerConfig.pauseClicks = 0;
    this.timerConfig.timerRunning = false;
  }

  toggleTimerState(triggerObj: any) {
    const { initialTime, resetTime } = triggerObj;
    if (resetTime) {
      this.resetTimer();
      return;
    }
    // Set Timer for the First Time after reset
    if (this.timerConfig.timerRunning) {
      this.pauseTimer();
    } else {
      console.log('initialTime: ', initialTime);
      console.log('timer: ', this.timerConfig.timer);
      console.log('initialTimerValue: ', this.timerConfig.initialTimerValue);
      this.startTimer();
    }
  }

  getTimeStr() {
    const dateTimeStr = new DatePipe('en-US').transform(new Date(), 'dd-MM-yyyy h:mm:ss a');
    return dateTimeStr;
  }

}

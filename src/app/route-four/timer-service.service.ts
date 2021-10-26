import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timerConfig = {
    initialTimerValue: 0,
    timer: 0,
    timerRunning: false,
    timerlogs: new Array,
    startClicks: 0,
    pauseClicks: 0,
  }
  interval: any;

  startTimer() {
    if (this.timerConfig.timer > 1) {
      this.timerConfig.startClicks++;
      this.timerConfig.timerRunning = true;
      this.interval = setInterval(() => {
        if (this.timerConfig.timer !== 0) {
          this.timerConfig.timer--;
        } else {
          clearInterval(this.interval);
        }
      }, 1000);
      this.timerConfig.timerlogs.push(`Started at ${this.getTimeStr()}`);
    }
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
      // console.log('initialTime: ', initialTime);
      // console.log('timer: ', this.timerConfig.timer);
      // console.log('initialTimerValue: ', this.timerConfig.initialTimerValue);
      this.startTimer();
    }
  }

  getTimeStr() {
    const dateTimeStr = new DatePipe('en-US').transform(new Date(), 'dd-MM-yyyy h:mm:ss a');
    return dateTimeStr;
  }
}
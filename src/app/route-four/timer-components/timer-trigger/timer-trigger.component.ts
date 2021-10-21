import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer-service.service';

@Component({
  selector: 'ps-timer-trigger',
  templateUrl: './timer-trigger.component.html',
  styleUrls: ['./timer-trigger.component.scss']
})
export class TimerTriggerComponent implements OnInit {

  initialTime = 0;
  enableTimerInput = true;

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
    this.initialTime = this.timerService.timerConfig.initialTimerValue;
  }

  changeTimer(initialTime: number, resetTime: boolean) {
    this.timerService.timerConfig.initialTimerValue = initialTime;
    this.timerService.toggleTimerState({initialTime, resetTime});
    if (resetTime) this.toggleTimerInput();
  }

  toggleTimerInput() {
    this.enableTimerInput = !this.enableTimerInput;
  }
}

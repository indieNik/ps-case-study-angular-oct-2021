import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ps-timer-trigger',
  templateUrl: './timer-trigger.component.html',
  styleUrls: ['./timer-trigger.component.scss']
})
export class TimerTriggerComponent implements OnInit {

  @Output() toggleTimeClick: EventEmitter<any> = new EventEmitter();
  @Input() timerConfig: any;
  initialTime = 0;
  enableTimerInput = true;

  constructor() { }

  ngOnInit(): void {
    this.initialTime = this.timerConfig.initialTimerValue;
  }

  changeTimer(initialTime: number, resetTime: boolean) {
    this.timerConfig.initialTimerValue = initialTime;
    this.toggleTimeClick.emit({initialTime, resetTime});
    if (resetTime) this.toggleTimerInput();
  }

  toggleTimerInput() {
    this.enableTimerInput = !this.enableTimerInput;
  }
}

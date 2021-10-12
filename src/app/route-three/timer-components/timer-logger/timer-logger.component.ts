import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ps-timer-logger',
  templateUrl: './timer-logger.component.html',
  styleUrls: ['./timer-logger.component.scss']
})
export class TimerLoggerComponent implements OnInit {

  @Input() timerLogs: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../../timer-service.service';

@Component({
  selector: 'ps-timer-logger',
  templateUrl: './timer-logger.component.html',
  styleUrls: ['./timer-logger.component.scss']
})
export class TimerLoggerComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

}

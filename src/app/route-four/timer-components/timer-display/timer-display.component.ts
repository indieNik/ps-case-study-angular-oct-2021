import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer-service.service';

@Component({
  selector: 'ps-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

}

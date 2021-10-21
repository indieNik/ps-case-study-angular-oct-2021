import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer-service.service';

@Component({
  selector: 'ps-timer-clicks',
  templateUrl: './timer-clicks.component.html',
  styleUrls: ['./timer-clicks.component.scss']
})
export class TimerClicksComponent implements OnInit {
  
  constructor(public timerService: TimerService) { }

  ngOnInit(): void {
  }

}

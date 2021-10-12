import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ps-timer-clicks',
  templateUrl: './timer-clicks.component.html',
  styleUrls: ['./timer-clicks.component.scss']
})
export class TimerClicksComponent implements OnInit {

  @Input() startClicks = 0;
  @Input() pauseClicks = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}

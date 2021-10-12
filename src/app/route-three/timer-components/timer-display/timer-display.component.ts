import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ps-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {

  @Input() startTime = 1000;
  constructor() { }

  ngOnInit(): void {
  }

}

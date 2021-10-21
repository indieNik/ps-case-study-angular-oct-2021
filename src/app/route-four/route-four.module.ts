import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFourRoutingModule } from './route-four-routing.module';
import { RouteFourComponent } from './route-four.component';
import { TimerDisplayComponent } from './timer-components/timer-display/timer-display.component';
import { TimerTriggerComponent } from './timer-components/timer-trigger/timer-trigger.component';
import { TimerLoggerComponent } from './timer-components/timer-logger/timer-logger.component';
import { TimerClicksComponent } from './timer-components/timer-clicks/timer-clicks.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RouteFourComponent,
    TimerDisplayComponent,
    TimerTriggerComponent,
    TimerLoggerComponent,
    TimerClicksComponent,
  ],
  imports: [
    CommonModule,
    RouteFourRoutingModule,
    FormsModule,
  ]
})
export class RouteFourModule { }

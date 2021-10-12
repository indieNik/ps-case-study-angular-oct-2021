import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteThreeRoutingModule } from './route-three-routing.module';
import { RouteThreeComponent } from './route-three.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { TimerDisplayComponent } from './timer-components/timer-display/timer-display.component';
import { TimerTriggerComponent } from './timer-components/timer-trigger/timer-trigger.component';
import { TimerLoggerComponent } from './timer-components/timer-logger/timer-logger.component';
import { TimerClicksComponent } from './timer-components/timer-clicks/timer-clicks.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RouteThreeComponent,
    TimerDisplayComponent,
    TimerTriggerComponent,
    TimerLoggerComponent,
    TimerClicksComponent
  ],
  imports: [
    CommonModule,
    RouteThreeRoutingModule,
    SharedComponentsModule,
    FormsModule,
  ]
})
export class RouteThreeModule { }

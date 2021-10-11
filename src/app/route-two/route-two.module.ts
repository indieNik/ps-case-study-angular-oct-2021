import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteTwoRoutingModule } from './route-two-routing.module';
import { RouteTwoComponent } from './route-two.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    RouteTwoComponent
  ],
  imports: [
    CommonModule,
    RouteTwoRoutingModule,
    SharedComponentsModule,
  ]
})
export class RouteTwoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFiveRoutingModule } from './route-five-routing.module';
import { RouteFiveComponent } from './route-five.component';


@NgModule({
  declarations: [
    RouteFiveComponent
  ],
  imports: [
    CommonModule,
    RouteFiveRoutingModule
  ]
})
export class RouteFiveModule { }

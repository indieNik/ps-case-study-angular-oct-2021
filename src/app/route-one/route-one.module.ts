import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteOneRoutingModule } from './route-one-routing.module';
import { RouteOneComponent } from './route-one.component';


@NgModule({
  declarations: [
    RouteOneComponent
  ],
  imports: [
    CommonModule,
    RouteOneRoutingModule
  ]
})
export class RouteOneModule { }

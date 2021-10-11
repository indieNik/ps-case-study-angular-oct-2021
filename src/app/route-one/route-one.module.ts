import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteOneRoutingModule } from './route-one-routing.module';
import { RouteOneComponent } from './route-one.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    RouteOneComponent
  ],
  imports: [
    CommonModule,
    RouteOneRoutingModule,
    SharedComponentsModule,
  ]
})
export class RouteOneModule { }

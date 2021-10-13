import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteSixRoutingModule } from './route-six-routing.module';
import { RouteSixComponent } from './route-six.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    RouteSixComponent
  ],
  imports: [
    CommonModule,
    RouteSixRoutingModule,
    SharedComponentsModule,
  ]
})
export class RouteSixModule { }

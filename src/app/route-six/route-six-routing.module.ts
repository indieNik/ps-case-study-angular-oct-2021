import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteSixComponent } from './route-six.component';

const routes: Routes = [{ path: '', component: RouteSixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteSixRoutingModule { }

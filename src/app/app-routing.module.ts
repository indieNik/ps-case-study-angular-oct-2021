import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'route-one'
  },
  { path: 'route-one', loadChildren: () => import('./route-one/route-one.module').then(m => m.RouteOneModule) },
  { path: 'route-two', loadChildren: () => import('./route-two/route-two.module').then(m => m.RouteTwoModule) },
  { path: 'route-three', loadChildren: () => import('./route-three/route-three.module').then(m => m.RouteThreeModule) },
  { path: 'route-five', loadChildren: () => import('./route-five/route-five.module').then(m => m.RouteFiveModule) },
  { path: 'route-six', loadChildren: () => import('./route-six/route-six.module').then(m => m.RouteSixModule) },
  { path: 'route-four', loadChildren: () => import('./route-four/route-four.module').then(m => m.RouteFourModule) },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'route-one'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

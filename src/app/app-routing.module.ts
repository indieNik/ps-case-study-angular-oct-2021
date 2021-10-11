import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'route-one'
  },
  {
    path: 'route-one',
    loadChildren: () => import('./route-one/route-one.module').then(m => m.RouteOneModule)
  },
  { path: 'route-two', loadChildren: () => import('./route-two/route-two.module').then(m => m.RouteTwoModule) },
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

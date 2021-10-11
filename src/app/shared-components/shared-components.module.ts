import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { RecursiveBannerComponent } from './recursive-banner/recursive-banner.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    RecursiveBannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    RecursiveBannerComponent,
  ]
})
export class SharedComponentsModule { }

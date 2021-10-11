import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { RecursiveBannerComponent } from './recursive-banner/recursive-banner.component';
import { EcommerceCardComponent } from './ecommerce-card/ecommerce-card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    RecursiveBannerComponent,
    EcommerceCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    RecursiveBannerComponent,
    EcommerceCardComponent,
  ]
})
export class SharedComponentsModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { ScrollDownModule } from 'src/app/shared/components/scroll-down/scroll-down.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    ScrollDownModule,

  ]
})
export class HomeModule { }

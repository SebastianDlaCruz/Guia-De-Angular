import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuDesplegableComponent } from './menu-desplegable.component';
@NgModule({
  declarations: [
    MenuDesplegableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [MenuDesplegableComponent]
})
export class MenuDesplegableModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollDownComponent } from './scroll-down.component';


@NgModule({
  declarations: [ScrollDownComponent],
  imports: [
    CommonModule
  ],
  exports: [ScrollDownComponent]
})
export class ScrollDownModule { }

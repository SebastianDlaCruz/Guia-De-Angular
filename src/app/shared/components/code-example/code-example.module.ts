import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExampleComponent } from './code-example.component';


@NgModule({
  declarations: [CodeExampleComponent],
  imports: [
    CommonModule
  ],
  exports: [CodeExampleComponent]
})
export class CodeExampleModule { }

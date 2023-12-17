import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExampleModule } from '@shared/components/code-example/code-example.module';
import { MenuDesplegableModule } from '@shared/components/menu-desplegable/menu-desplegable.module';
import { HighlightModule } from '@shared/directives/highlight/highlight.module';
import { CpRoutingModule } from './cp-routing.module';
import { CpComponent } from './cp.component';
@NgModule({
  declarations: [CpComponent],
  imports: [
    CommonModule,
    CpRoutingModule,
    CodeExampleModule,
    MenuDesplegableModule,
    HighlightModule
  ]
})
export class CpModule { }

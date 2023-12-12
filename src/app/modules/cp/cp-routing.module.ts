import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpComponent } from './cp.component';

const routes: Routes = [{
  path: '', component: CpComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpRoutingModule { }

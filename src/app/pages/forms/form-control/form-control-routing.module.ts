import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormControlComponent } from './form-control.component';

const routes: Routes = [{ path: '', component: FormControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlRoutingModule {}

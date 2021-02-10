import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuiltinThemesComponent } from './builtin-themes.component';

const routes: Routes = [{ path: '', component: BuiltinThemesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuiltinThemesRoutingModule { }

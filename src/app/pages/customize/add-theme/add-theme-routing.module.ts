import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddThemeComponent } from './add-theme.component';

const routes: Routes = [{ path: '', component: AddThemeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddThemeRoutingModule { }

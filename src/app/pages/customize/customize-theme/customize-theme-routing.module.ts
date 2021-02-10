import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomizeThemeComponent } from './customize-theme.component';

const routes: Routes = [{ path: '', component: CustomizeThemeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizeThemeRoutingModule { }

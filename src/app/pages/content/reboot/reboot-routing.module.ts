import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RebootComponent } from './reboot.component';

const routes: Routes = [{ path: '', component: RebootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RebootRoutingModule {}
